import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    isAuth: null,
    loginErrors: null
}
const login = createAsyncThunk('authSlice/login', async ({user}) => {
    const {data} = await authService.login(user);
    return data
});
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuth = true
        },
        setError: state =>
            state.loginErrors = false
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true;
                state.loginErrors = false;
                // console.log(action.payload);
                const {access, refresh} = action.payload;
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh);
            })
            .addCase(login.rejected, state => {
                state.loginErrors = true
            })
    }
});
const {reducer: authReducer, actions: {setAuth, setError}} = authSlice;
const authActions = {login, setAuth, setError};

export {authReducer, authActions};