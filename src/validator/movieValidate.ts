import type { moviesDataIF } from "@/types/types";

export const validateForm = (formData: moviesDataIF) => {
    const errors: Record<string, string> = {};

    if (!formData.title.trim()) {
        errors.title = "Title is required";
    } else if (formData.title.trim().length < 2) {
        errors.title = "Title must be at least 2 characters";
    }

    try {
        const url = new URL(formData.poster);

        const isImage =
            url.pathname.match(/\.(jpg|jpeg|png|webp|gif)$/i);

        const isGoogleUrl =
            url.hostname.includes("google.com");

        if (!isImage || isGoogleUrl) {
            errors.poster = "Enter a direct image URL";
        }
    } catch {
        errors.poster = "Invalid poster URL";
    }

    if (!formData.description) {
        errors.description = "Description is required";
    } else if (formData?.description.trim().length < 20) {
        errors.description = "Description must be at least 20 characters";
    }

    const genres = formData.genre.filter((genre) => genre.trim());

    if (genres.length === 0) {
        errors.genre = "At least one genre is required";
    }

    if (formData.duration == "") {
        errors.duration = "Duration is required"
    }
    else if (formData.duration <= 0) {
        errors.duration = "Duration must be greater than 0 minutes";
    }

    if (formData.rating == "") {
        errors.rating = "Rating is required";
    } else if (formData.rating < 1 || formData.rating > 10) {
        errors.rating = "Rating must be between 1 and 10";
    }

    if (!formData.language.trim()) {
        errors.language = "Language is required";
    }

    return errors;
};