export interface Anime {
    mal_id: number;
    title: string;
    title_english: string | null;
    images: {
        jpg: {
            image_url: string;
            large_image_url: string;
        };

    };
    synopsis: string | null;
    score: number | null;
    episodes: number | null;
    status: string;
    genres: { mal_id: number; name: string }[];
    year: number | null;
}

export interface JikanResponse {
    data: Anime[];
    pagination: {
        current_page: number;
        has_next_page: boolean;
        last_visit_page: number;
    };
};