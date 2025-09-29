"use client"; // mark as client component

import { useEffect, useState } from "react";
import { getMovies } from "@/lib/api/movies";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function AllMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies(1); // fetch page 1
        setMovies(data.results); // TMDB returns `results`
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.slice(0, 20).map((movie) => (
        <div
          key={movie.id}
          className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto"
          />
          <p className="p-2 text-center font-medium">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}
