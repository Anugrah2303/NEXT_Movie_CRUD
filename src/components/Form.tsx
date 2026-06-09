"use client"

import Input from "./Input"
import Button from "./Button"
import type { FormProps } from "@/types/types"
import { IoCloseCircleOutline } from "react-icons/io5"
import { useRouter } from "next/navigation"
import OptionsList from "./OptionsList"
import { movieLanguages } from "@/data/data"

const Form = ({ formData, setFormData, handleSubmit, error, heading }: FormProps) => {
    const navigate = useRouter();
    return (
        <>
            <div className="w-full py-7  flex justify-center items-center">
                <form className="py-7 bg-(--surface-2) w-150 px-7 flex flex-col gap-5 rounded-2xl shadow-2xl relative" onSubmit={(e) => handleSubmit(e)}>

                    <IoCloseCircleOutline size={25} className="absolute top-5 right-5 cursor-pointer" onClick={() => navigate.push("/")} />

                    <h1 className="text-2xl my-5 text-center border-b pb-5 ">{heading}</h1>

                    <div>
                        <Input value={formData.title} placeholder="title" label="title" name="title" onChange={(e) => setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} />
                        {
                            error?.title && <span className="mt-1 block rounded-md px-3 py-2 text-sm border border-(--danger) bg-(--danger)/10 text-(--danger)">{error.title}</span>
                        }
                    </div>

                    <div>
                        <Input value={formData.poster} placeholder="poster" label="poster" name="poster" onChange={(e) => setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} />
                        {
                            error?.poster && <span className="mt-1 block rounded-md px-3 py-2 text-sm border border-(--danger) bg-(--danger)/10 text-(--danger)">{error.poster}</span>
                        }
                    </div>

                    <div>
                        <Input value={formData.description} placeholder="description" label="description" name="description" onChange={(e) => setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} />
                        {
                            error?.description && <span className="mt-1 block rounded-md px-3 py-2 text-sm border border-(--danger) bg-(--danger)/10 text-(--danger)">{error.description}</span>
                        }
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <div>
                                <Input value={formData.genre.join(", ")} placeholder="Action, Drama" label="genre" name="genre" onChange={(e) => setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value.split(",").map(g => g.trim()) }))} />
                                {
                                    error?.genre && <span className="mt-1 block rounded-md px-3 py-2 text-sm border border-(--danger) bg-(--danger)/10 text-(--danger)">{error.genre}</span>
                                }
                            </div>

                            <div>
                                <Input value={Number(formData.rating)} placeholder="rating" label="rating" name="rating" onChange={(e) => setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value === "" ? "" : Number(e.target.value) }))} />
                                {
                                    error?.rating && <span className="mt-1 block rounded-md px-3 py-2 text-sm border border-(--danger) bg-(--danger)/10 text-(--danger)">{error.rating}</span>
                                }
                            </div>
                        </div>

                        <div>
                            <div>
                                <Input value={formData.language} placeholder="language" label="language" name="language" onChange={(e) => setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} list="lang-list" />
                                <OptionsList Tag="datalist" data={movieLanguages} id="lang-list" />
                                {
                                    error?.language && <span className="mt-1 block rounded-md px-3 py-2 text-sm border border-(--danger) bg-(--danger)/10 text-(--danger)">{error.language}</span>
                                }
                            </div>

                            <div>
                                <Input value={Number(formData.duration)} placeholder="duration" label="duration" name="duration" onChange={(e) => setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value === "" ? "" : Number(e.target.value) }))} />
                                {
                                    error?.duration && <span className="mt-1 block rounded-md px-3 py-2 text-sm border border-(--danger) bg-(--danger)/10 text-(--danger)">{error.duration}</span>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <Button content="Add Movie" variant="outline" type="submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form