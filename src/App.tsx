import { useAnimes } from "./hooks/useAnimes";
import { AnimeCard } from "./components/AnimeCard";

function App() {
  const { animes, loading, error } = useAnimes();

  if (loading) return <p className="text-center mt-10">Carregando animes...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">AniVault</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {animes.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;