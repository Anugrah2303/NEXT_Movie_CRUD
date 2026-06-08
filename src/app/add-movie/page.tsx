"use client"

import Form from "@/components/Form";
import { formInitialState } from "@/data/data";
import type { moviesDataIF } from "@/types/types";
import { getDataFromSessionStorage, setDataInSessionStorage } from "@/utils/storage";
import { validateForm } from "@/validator/movieValidate";
import generateUniqueId from "generate-unique-id";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddMovie = () => {

  const [formData, setFormData] = useState<moviesDataIF>(formInitialState)
  const [error, setError] = useState<Record<string, string>>({})
  const navigate = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateForm(formData);

    if (Object.keys(error).length == 0) {
      const movieData = { ...formData, id: generateUniqueId() }
      const data = [movieData, ...getDataFromSessionStorage()];
      setDataInSessionStorage(data)
      setError({})
      setFormData(formInitialState)
      navigate.push("/")
    }
    else setError(error)

  }

  return (
    <>
      <section>
        <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} error={error} heading="Add movie" />
      </section>
    </>
  );
};

export default AddMovie;