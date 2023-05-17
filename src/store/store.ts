import { configureStore, combineReducers } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieReducer';
import genreReducer from './reducers/genreReducer';

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default  rootReducer;
