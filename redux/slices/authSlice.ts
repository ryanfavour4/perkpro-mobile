import api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type props = {
    loading: boolean,
    error: boolean,
    errorMessage: string,
    message: string,
    userData: any
}

export const loginAsync = createAsyncThunk('auth/loginAsync', async (payload, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.post('/users/login', payload)
        console.log('login-data', data);

        dispatch(setUserLogin(data))

    } catch (error: any) {
        console.log('login-error', error.message);
        dispatch(setError(error?.response?.data?.message || 'An error occurred'))
        return rejectWithValue(error.response.data.message || 'An error occurred')
    }
})



const initialState: props = {
    loading: false,
    error: false,
    errorMessage: '',
    message: '',
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setUserLogin: (state, action) => {
            state.loading = false
            state.userData = action.payload
        },
        setError: (state, action) => {
            state.error = true
            state.errorMessage = action.payload
            state.loading = false
        },
        clearAuthLog:(state)=>{
            state.error = false
            state.errorMessage = ''
            state.loading = false
        }
    }
})

export const { setError, setLoading, setUserLogin, clearAuthLog } = authSlice.actions
export default authSlice