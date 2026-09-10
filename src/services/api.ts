import type { Anime, JikanResponse } from "../types/anime";

const BASE_URL = "https://api.jikan.moe/v4";

async function fetchWithRetry(url: string, retries: number = 3): Promise<Response> {
    for (let attempt = 0; attempt <= retries; attempt++) {
        const response = await fetch(url);

        if (response.ok) return response;

        const isRetryable = response.status === 504 || response.status === 429;
        const isLastAttempt = attempt === retries;

        if (!isRetryable || isLastAttempt) {
            throw new Error("Erro ao buscar animes");
        }

        const delay = 500 * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
    }

    throw new Error("Erro so buscar animes");
}

export async function getTopAnimes(page: number = 1): Promise<JikanResponse> {
    const response = await fetchWithRetry(`${BASE_URL}/top/anime?page=${page}`);
    const data: JikanResponse = await response.json();
    return data;
}

export async function searchAnimes(query: string, page: number = 1): Promise<JikanResponse> {
    const response = await fetchWithRetry(`${BASE_URL}/anime?q${encodeURIComponent(query)}&page=${page}`);
    const data: JikanResponse = await response.json();
    return data;
}
