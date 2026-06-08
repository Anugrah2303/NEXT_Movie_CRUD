import type React from "react"
import type { IconBaseProps, IconType } from "react-icons";

export interface moviesDataIF {
    id: string;
    title: string;
    poster: string;
    description: string;
    genre: string[];
    duration: number | "";
    rating: number | "";
    language: string;
}

export interface IconProp {
    Icon: IconType,
    options?: IconBaseProps,
    className?: string
    onClick?: () => void
}

export interface ButtonProps {
    Icon?: IconType,
    options?: IconBaseProps,
    content?: string
    type?: "button" | "reset" | "submit"
    className?: string
    variant?: "outline" | "normal"
    onClick?: () => void
}

export interface InputProps {
    type?: string
    placeholder: string
    name?: string
    value?: string | number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    label: string
    list?: string
}

export interface FormProps {
    formData: moviesDataIF
    setFormData: React.Dispatch<React.SetStateAction<moviesDataIF>>
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    error?: Record<string, string>
    heading: string
}