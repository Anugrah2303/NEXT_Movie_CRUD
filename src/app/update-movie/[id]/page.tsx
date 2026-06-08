"use client"

import Form from "@/components/Form";
import { getDataFromSessionStorage } from "@/utils/storage";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import type { moviesDataIF } from "@/types/types";
import { formInitialState } from "@/data/data";
import { updateMovie } from "@/utils/movieFunctions";

const Page = () => {

    const navigate = useRouter();

    const { id } = useParams();

    const movie = getDataFromSessionStorage().find(m => m.id === id);

    const [formData, setFormData] = useState<moviesDataIF>(
        movie || formInitialState
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateMovie(formData);
        navigate.push("/");
    };

    if (!movie) {
        return <div>Movie Not Found</div>;
    }

    return (
        <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} error={{}} heading="Update Movie" />
    );
};

export default Page;