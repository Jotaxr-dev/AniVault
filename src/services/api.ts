import type { Anime, JikanResponse } from "../types/anime";

const BASE_URL = "https://api.jikan.moe/v4";

export async function getTopAnimes(page: number = 1): Promise<JikanResponse> {
    const res = await fetch(`${BASE_URL}/top/anime?page=${page}`);
    if (!res.ok) {
        throw new Error("Error ao buscar animes");
    }

    const data: JikanResponse = await res.json();
    return data;
}


