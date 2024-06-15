import {
    createSlice
} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, payload) => {

        },
        checkingCredentials: (state) => {
            state.status = 'ckecking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;