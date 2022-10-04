import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const allTvShows = createAsyncThunk("ALL_TVSHOWS", () => {
    return axios.get("https://themoviecode-back.onrender.com/api/tvshows",
        { withCredentials: true, credentials: 'include' })
        .then(user => user.data)
        .catch(error => console.log(error))
});

export const searchAll = createAsyncThunk("SEARCH_All", (search) => {
    return axios.get(`https://themoviecode-back.onrender.com/api/tvshows/search/${search}`,
        { withCredentials: true, credentials: 'include' })
        .then(movies => movies.data)
        .catch(error => console.log(error))
});

const tvShowsReducer = createReducer([], {
    [allTvShows.fulfilled]: (state, action) => action.payload,
    [searchAll.fulfilled]: (state, action) => action.payload,
});

export default tvShowsReducer;