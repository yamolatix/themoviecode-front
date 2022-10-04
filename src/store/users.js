import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const showUsers = createAsyncThunk("SHOW_USERS", () => {
    return axios.get(`https://themoviecode-back.onrender.com/api/user/showUsers`,
        { withCredentials: true, credentials: 'include' })
        .then(users => users.data)
        .catch(error => console.log(error))
});

const usersReducer = createReducer([], {
    [showUsers.fulfilled]: (state, action) => action.payload,
});

export default usersReducer;