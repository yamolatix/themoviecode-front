import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const allFavorites = createAsyncThunk("ALL_FAVORITES", (username) => {
    return axios.get(`https://themoviecode-back.onrender.com/api/user/${username}/favorites`,
        { withCredentials: true, credentials: 'include' })
        .then(movie => movie.data)
        .catch(error => console.log(error))
});

const favoritesReducer = createReducer([], {
    [allFavorites.fulfilled]: (state, action) => action.payload,
});

export default favoritesReducer;