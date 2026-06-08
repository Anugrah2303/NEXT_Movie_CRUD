"use client";

import { useEffect, useMemo, useState } from "react";
import MovieCard from "./MovieCard";
import { getDataFromSessionStorage } from "@/utils/storage";
import type { moviesDataIF } from "@/types/types";
import Button from "./Button";

const MoviesDisplay = () => {
  const [moviesData] = useState<moviesDataIF[]>(() => {
    if (typeof window === "undefined") return [];
    return getDataFromSessionStorage();
  });

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  const languages = [...new Set(moviesData.map((movie) => movie.language))];

  const genres = [
    ...new Set(
      moviesData.flatMap((movie) =>
        Array.isArray(movie.genre) ? movie.genre : []
      )
    ),
  ];

  const filteredAndSortedMovies = useMemo(() => {
    const filteredMovies = moviesData.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesLanguage =
        !selectedLanguage || movie.language === selectedLanguage;

      const matchesGenre =
        !selectedGenre ||
        (Array.isArray(movie.genre) &&
          movie.genre.includes(selectedGenre));

      const matchesRating =
        !minRating || Number(movie.rating) >= Number(minRating);

      return (
        matchesSearch &&
        matchesLanguage &&
        matchesGenre &&
        matchesRating
      );
    });

    return [...filteredMovies].sort((a, b) => {
      switch (sortBy) {
        case "title-asc":
          return a.title.localeCompare(b.title);

        case "title-desc":
          return b.title.localeCompare(a.title);

        case "rating-asc":
          return Number(a.rating) - Number(b.rating);

        case "rating-desc":
          return Number(b.rating) - Number(a.rating);

        case "duration-asc":
          return Number(a.duration) - Number(b.duration);

        case "duration-desc":
          return Number(b.duration) - Number(a.duration);

        default:
          return 0;
      }
    });
  }, [moviesData, search, sortBy, selectedLanguage, selectedGenre, minRating,]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortBy, selectedLanguage, selectedGenre, minRating]);

  const totalPages = Math.ceil(
    filteredAndSortedMovies.length / moviesPerPage
  );

  const currentMovies = filteredAndSortedMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const resetFilters = () => {
    setSearch("");
    setSortBy("");
    setSelectedLanguage("");
    setSelectedGenre("");
    setMinRating("");
    setCurrentPage(1);
  };

  return (
    <section className="p-10">
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <input type="text" placeholder="Search movies..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 min-w-55 px-4 py-3 rounded-xl bg-(--surface) border border-(--border) outline-none" />

        <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="px-4 py-3 rounded-xl bg-(--surface) border border-(--border) outline-none">
          <option value="">Language</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="px-4 py-3 rounded-xl bg-(--surface) border border-(--border) outline-none">
          <option value="">Genre</option>

          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <input type="number" min="0" max="10" placeholder="Min Rating" value={minRating} onChange={(e) => setMinRating(e.target.value)} className="w-32 px-4 py-3 rounded-xl bg-(--surface) border border-(--border) outline-none" />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-3 rounded-xl bg-(--surface) border border-(--border) outline-none" >
          <option value="">Sort By</option>
          <option value="title-asc">Title A-Z</option>
          <option value="title-desc">Title Z-A</option>
          <option value="rating-asc">Rating ↑</option>
          <option value="rating-desc">Rating ↓</option>
          <option value="duration-asc">Duration ↑</option>
          <option value="duration-desc">Duration ↓</option>
        </select>

        <Button onClick={resetFilters} content="Reset" />

      </div>

      <div className="mb-6 text-sm text-(--text-secondary)">
        Showing {currentMovies.length} of {filteredAndSortedMovies.length} movies
      </div>

      {filteredAndSortedMovies.length === 0 ? (
        <div className="text-center py-20 text-(--text-secondary)">
          No Movies Found
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-6">
            {currentMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)} className="px-4 py-2 rounded-lg border border-(--border) disabled:opacity-40">
                Prev
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => (
                  <button key={index} onClick={() => setCurrentPage(index + 1)} className={`w-10 h-10 rounded-lg border transition-all ${currentPage === index + 1 ? "bg-(--primary) border-(--primary)" : "border-(--border) hover:border-(--accent)"}`}>
                    {index + 1}
                  </button>
                )
              )}

              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)} className="px-4 py-2 rounded-lg border border-(--border) disabled:opacity-40">
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MoviesDisplay;