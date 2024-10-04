import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    loading: true,
    error: null,
    trendingMovies: [],
    upCommingMovies: [],
    moviesList: [],
    tvList: [],
    loading: true,
    error: null,
    moviesFavorites: []
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        setUpCommingMovies: (state, action) => {
            state.upCommingMovies = action.payload
        },
        setMoviesList: (state, action) => {
            state.moviesList = action.payload
        },
        setTvList: (state, action) => {
            state.tvList = action.payload
        },
        addMoviesFavorites: (state, action) => {
            state.moviesFavorites = [...state.moviesFavorites, action.payload];
            console.log(state.moviesFavorites);

        }
    }
})

export const { setLoading, setError, setTrendingMovies, setUpCommingMovies, setMoviesList, setTvList, addMoviesFavorites } = moviesSlice.actions
export default moviesSlice.reducer