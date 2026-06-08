"use client";

import Button from "@/components/Button";
import { deleteMovie } from "@/utils/movieFunctions";
import { getDataFromSessionStorage } from "@/utils/storage";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const navigate = useRouter();

  const movie = getDataFromSessionStorage().find(m => m.id === id);

  if (!movie) return <div className="flex justify-center items-center h-[80vh]"><h1 className="text-2xl text-(--danger)">Movie Not Found</h1></div>;

  const handleDelete = () => {
    deleteMovie(id as string);
    navigate.push("/");
  }

  return (
    <section className="max-w-6xl mx-auto p-8">
      <div className="bg-(--surface-2) rounded-3xl overflow-hidden shadow-2xl border border-(--border)">
        <div className="grid md:grid-cols-[350px_1fr] gap-8 p-8">
          <div className="relative h-125 rounded-2xl overflow-hidden">
            <Image src={movie.poster} alt={movie.title} fill className="object-cover" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start gap-5">
                <h1 className="text-5xl font-bold">{movie.title}</h1>
                <span className="text-xl px-4 py-2 rounded-full bg-(--accent)/20 border border-(--accent)">⭐ {movie.rating}</span>
              </div>

              <div className="flex gap-4 mt-5 text-(--text-secondary)">
                <span>{movie.language}</span>
                <span>•</span>
                <span>{movie.duration} min</span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {movie.genre.map((genre: string, index: number) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-(--surface) border border-(--border)">
                    {genre}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-(--text-secondary) leading-8">{movie.description}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <Button content="Edit Movie" variant="normal" onClick={() => navigate.push(`/update-movie/${id}`)} />
              <Button content="Delete Movie" variant="outline" onClick={handleDelete} />
              <Button content="Back" variant="outline" onClick={() => navigate.push("/")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;