import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genreTypes';
import { RootState } from '../store';

interface GenreState {
    genres: Genre[];
    loading: boolean;
    error: string | null;
}

const initialState: GenreState = {
    genres: [],
    loading: false,
    error: null,
};

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        getGenresStart(state) {
            state.loading = true;
            state.error = null;
        },
        getGenresSuccess(state, action: PayloadAction<Genre[]>) {
            state.genres = action.payload;
            state.loading = false;
        },
        getGenresFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getGenresStart, getGenresSuccess, getGenresFailure } = genreSlice.actions;

export const selectGenres = (state: RootState) => state.genres.genres;

export default genreSlice.reducer;
