import AllMovies from "@/components/movies/Movies";

export default function Movies() {
  return (
    <div className=" p-14 bg-white flex flex-col items-center justify-center">
      <h1 className="pb-7 text-4xl text-black font-bold">
        Popular Movies. (WIP)
      </h1>
      <AllMovies />
    </div>
  );
}
