import type { moviesDataIF } from "@/types/types";
import { getDataFromSessionStorage } from "./storage";

export const updateMovie = (updatedMovie: moviesDataIF) => {
    const movies: moviesDataIF[] = getDataFromSessionStorage();

    const updatedMovies = movies.map(movie =>
        movie.id === updatedMovie.id ? updatedMovie : movie
    );

    sessionStorage.setItem("movies", JSON.stringify(updatedMovies));
};

export const deleteMovie = (id: string) => {
    const movies: moviesDataIF[] = getDataFromSessionStorage();

    const filteredMovies = movies.filter(movie => movie.id !== id);

    sessionStorage.setItem("movies", JSON.stringify(filteredMovies));
};