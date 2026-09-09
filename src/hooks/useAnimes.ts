import { useState, useEffect } from "react";
import { getTopAnimes } from "../services/api";
import type { Anime } from "../types/anime";

export function useAnimes() {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAnimes() {
            try {
                setLoading(true);
                setError(null);
                const res = await getTopAnimes();
                setAnimes(res.data);
            } catch (error) {
                setError("Não foi possível carregar os animes. Tente novamente.");
            } finally {
                setLoading(false);
            }
        }
        fetchAnimes();
    }, []);

    return { animes, loading, error };
}