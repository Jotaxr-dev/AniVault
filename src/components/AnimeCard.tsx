import type { Anime } from "../types/anime";

interface AnimeCardProps {
    anime: Anime;
}

export function AnimeCard({ anime }: AnimeCardProps) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale=105 transition-transform cursor-pointer">
                <img src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    className="w-full h-72 object-cover" />

                <div className="p-3">
                    <h3 className="font-semibold text-sm line-clamp-2">{anime.title}</h3>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>⭐ {anime.score ?? `N/A`}</span>
                        <span>{anime.year ?? "-"}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

