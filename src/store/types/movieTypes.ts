export interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    overview: string;
    genres: Genre[];
}

export interface Genre {
    id: number;
    name: string;
}
