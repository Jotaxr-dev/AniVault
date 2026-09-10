import { useState, useEffect } from "react";
import { getTopAnimes, searchAnimes } from "../services/api";
import { useDebounce } from "./useDebounce";
import type { Anime } from "../types/anime";

export function useAnimes(searchTerm: string) {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const debouncedSearch = useDebounce(searchTerm, 500);

    useEffect(() => {
        async function fetchAnimes() {
            try {
                setLoading(true);
                setError(null);

                const res = debouncedSearch.trim() ? await searchAnimes(debouncedSearch) : await getTopAnimes();

                setAnimes(res.data);
            } catch (error) {
                setError("Não foi possível carregar os animes. Tente novamente.");
            } finally {
                setLoading(false);
            }
        }
        fetchAnimes();
    }, [debouncedSearch]);

    return {
        animes,
        loading,
        error
    };
}