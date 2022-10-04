import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const allMovies = createAsyncThunk("ALL_MOVIES", () => {
    return axios.get("https://themoviecode-back.onrender.com/api/movies",
        { withCredentials: true, credentials: 'include' })
        .then(user => user.data)
        .catch(error => console.log(error))
});

/* export const searchMovies = createAsyncThunk("SEARCH_MOVIE", (search) => {
    return axios.get(`https://themoviecode-back.onrender.com/api/movies/search/${search}`,
     { withCredentials: true, credentials: 'include' })
        .then(movies => movies.data)
        .catch(error => console.log(error))
}) */

const moviesReducer = createReducer([], {
    [allMovies.fulfilled]: (state, action) => action.payload,
    // [searchMovies.fulfilled]: (state, action) => action.payload,
});

export default moviesReducer;