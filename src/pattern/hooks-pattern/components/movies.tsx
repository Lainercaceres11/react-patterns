import { useFetch } from "../useFetch";

export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  rating: number;
  runtime: number;
  poster: string;
}

export const Movies = () => {
  const { data, loading, error } = useFetch<Movie[]>(
    "http://localhost:3001/movies",
  );

  if (loading) return <p>Loading movies...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Movies</h2>
      <ul className="space-y-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map((movie) => (
          <li key={movie.id} className="space-y-2 border p-2">
            <p> {movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.director}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
