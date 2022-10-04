import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const movieNowPlaying = createAsyncThunk("NOW_PLAYING_MOVIES", () => {
    return axios.get(`https://themoviecode-back.onrender.com/api/movies/now_playing`,
        { withCredentials: true, credentials: 'include' })
        .then(movies => movies.data.results)
        .catch(error => console.log(error))
})

const nowPlayingReducer = createReducer([], {
    [movieNowPlaying.fulfilled]: (state, action) => action.payload,
});

export default nowPlayingReducer;