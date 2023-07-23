// reducers/auth.js
import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import request from "../../request";



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: null,
        isLoading: false,
        registered: false
    },
    reducers: {
        login: async (state, action)=>{
            state.isLoading=true
        },
        register: (state)=>{
            state.isLoading=true
        },
        loginSuccess: (state, action) => {
            // localStorage.setItem("AUTH_TOKEN", action.payload.access_token)
            // localStorage.setItem("REFRESH_TOKEN", action.payload.refresh_token)
            console.log(state)
            state.registered = true
            state.error = null;
            state.isLoading=false
            return {...state}
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading=false
        },
        registerSuccess: (state, action) => {
            state.isLoading=false
            state.error = null;
        },
        registerFailure: (state, action) => {
            state.registered = false
            state.isLoading=false
            state.error = action.payload;
        },
        getMe1: (state)=>{
            state.isLoading=true
        },
        getMe2: (state, action)=>{
            state.isLoading=false
            state.user=action.payload
        },
        getMeFailed: (state)=>{
            state.error="Ro'yxatdan o'tmagansan ablax, loginga kir!"
        }
    },
});

export const { getMeFailed, getMe1, getMe2, login, register, loginSuccess, loginFailure, registerSuccess, registerFailure } = authSlice.actions;
// export const actions = authSlice.actions;
export default authSlice.reducer;
