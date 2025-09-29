import AllMovies from "@/components/movies/Movies";

export default function Movies() {
  return (
    <div className="min-h-screen flex bg-white items-center justify-center">
      <h1 className=" text-4xl text-black font-bold">Movies</h1>
      <AllMovies />
    </div>
  );
}
