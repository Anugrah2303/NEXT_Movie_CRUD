import type { moviesDataIF } from "@/types/types";

export const getDataFromSessionStorage = (): moviesDataIF[] => {
    const data = sessionStorage.getItem("movies")
    return data ? JSON.parse(data) : []
}

export const setDataInSessionStorage = (data: moviesDataIF[]) => {
    if (typeof window === "undefined") return;

    sessionStorage.setItem("movies", JSON.stringify(data));
}