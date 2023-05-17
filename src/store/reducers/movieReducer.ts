import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movieTypes';
import { RootState } from '../store';

interface MovieState {
    movies: Movie[];
    loading: boolean;
    error: string | null;
}

const initialState: MovieState = {
    movies: [],
    loading: false,
    error: null,
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMoviesStart(state) {
            state.loading = true;
            state.error = null;
        },
        getMoviesSuccess(state, action: PayloadAction<Movie[]>) {
            state.movies = action.payload;
            state.loading = false;
        },
        getMoviesFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getMoviesStart, getMoviesSuccess, getMoviesFailure } = movieSlice.actions;

export const selectMovies = (state: RootState) => state.movies.movies;

export default movieSlice.reducer;
