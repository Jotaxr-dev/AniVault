import { useState } from "react";
import { useAnimes } from "./hooks/useAnimes";
import { AnimeCard } from "./components/AnimeCard";
import { AnimeCardSkeleton } from "./components/AnimeCardSkeleton";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const { animes, loading, error } = useAnimes(search);

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">AniVault</h1>
        <SearchBar value={search} onChange={setSearch} />

        {error && <p className="text-center mt-10 text-red-500">{error}</p>}

        {!error && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {loading ? Array.from({ length: 10 }).map((_, i) => <AnimeCardSkeleton key={i} />) : animes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)}
          </div>
        )}
      </div>
    </>
  );
}

export default App;