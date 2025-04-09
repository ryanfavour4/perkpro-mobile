import api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SecureStore from 'expo-secure-store';


type props = {
    loading: boolean,
    error: boolean,
    errorMessage: string,
    message: string,
    userData: any,
    isAuthenticated: boolean,
    success:boolean
}

export const loginAsync = createAsyncThunk('auth/loginAsync', async (payload, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.post('/users/login', payload)
        console.log('login-data', data);
        dispatch(setAuth(data.message))
        await SecureStore.setItemAsync('token', data.token)

    } catch (error: any) {
        console.log('login-error', error.message);
        dispatch(setError(error?.response?.data?.message || 'An error occurred'))
        return rejectWithValue(error.response.data.message || 'An error occurred')
    }
})

export const fetchProfile= createAsyncThunk('auth/fetchProfile', async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        console.log('start');
        
        const { data } = await api.get('/users/profile')
        console.log('mide');
        
        console.log('profile-data', data);
        dispatch(setUser(data.data))
    } catch (error: any) {
        console.log('profile-error', error.message);
        dispatch(setError(error?.response?.data?.message || 'An error occurred'))
        return rejectWithValue(error.response.data.message || 'An error occurred')
    }
}
)


export const updateProfile = createAsyncThunk('auth/updateProfile', async (payload: any, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.put('/users/update-profile', payload)
        console.log('update-profile-data', data);
        dispatch(setUser(data.data))
        dispatch(setMessage(data.message))
    } catch (error: any) {
        console.log('update-profile-error', error.message);
        dispatch(setError(error?.response?.data?.message || 'An error occurred'))
        return rejectWithValue(error.response.data.message || 'An error occurred')
    }
}
)

export const deleteAccount = createAsyncThunk('auth/deleteAccount', async (payload: any, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.delete('/users/delete-account', payload)
        console.log('delete-account-data', data);
        dispatch(setMessage(data.message))
        dispatch(setUser(null))
    } catch (error: any) {
        console.log('delete-account-error', error.message);
        dispatch(setError(error?.response?.data?.message || 'An error occurred'))
        return rejectWithValue(error.response.data.message || 'An error occurred')
    }
}
)

export const changePassword = createAsyncThunk('auth/changePassword', async (payload: any, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.put('/users/change-password', payload)
        console.log('change-password-data', data);
        dispatch(setMessage(data.message))
    } catch (error: any) {
        console.log('change-password-error', error.message);
        dispatch(setError(error?.response?.data?.message || 'An error occurred'))
        return rejectWithValue(error.response.data.message || 'An error occurred')
    }
}
)

export const completeKyc = createAsyncThunk('auth/completeKyc', async (payload: any, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.put('/users/complete-kyc', payload)
        console.log('complete-kyc-data', data);
        dispatch(setMessage(data.message))
    } catch (error: any) {
        console.log('complete-kyc-error', error.message);
        dispatch(setError(error?.response?.data?.message || 'An error occurred'))
        return rejectWithValue(error.response.data.message || 'An error occurred')
    }
}
)


const initialState: props = {
    loading: false,
    error: false,
    errorMessage: '',
    message: '',
    userData: null,
    isAuthenticated: false,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setAuth: (state, action) => {
            state.isAuthenticated = true
            state.message = action.payload
            state.success = true
        },
        setUser: (state, action) => {
            state.loading = false
            state.userData = action.payload
        },
        setError: (state, action) => {
            state.error = true
            state.errorMessage = action.payload
            state.loading = false
        },
        clearAuthLog: (state) => {
            state.error = false
            state.errorMessage = ''
            state.loading = false
            state.message = ''
            state.success = false
        },

        setMessage: (state, action) => {
            state.message = action.payload
        }
    }
})

export const { setError, setLoading, setUser, setAuth, clearAuthLog, setMessage } = authSlice.actions
export default authSlice