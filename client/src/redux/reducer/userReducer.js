import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const login = createAsyncThunk(
    'login',
    async () => {
        const req = {
            account: "huyca95@gmail.com",
            password: "222222",
            provider: "phonenumber"
        }
        const data = await axios.post("http://localhost:3001/v1/login", req)
        return data.data.data
    }
)

const loginToken = createAsyncThunk(
    'loginToken',
    async () => {

    }
)

const loginApp = createAsyncThunk(
    'loginApp',
    async () => {
        const data = await axios.get("http://localhost:3001/v1/auth/login/success")
        return data.data.data
    }
)

const reducerUser = createSlice({
    name: 'user',
    initialState: {
        user: [],
        isLogin: false,
        loginError: false
    },
    reducers: {
        logout(state, action) {
            state.user = []
        },
        changeUser(state, action) {
            state.user = action.payload
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.isLogin = false
        },
        [login.fulfilled]: (state, action) => {
            state.isLogin = true
            state.user = action.payload
        },
        [login.rejected]: (state, action) => {
            state.loginError = true
        },
    }
})

export { login, loginToken }
export const { logout, changeUser } = reducerUser.actions;
export const userReducer = reducerUser.reducer