import api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addEstate = createAsyncThunk('estate/addEstate', async (payload, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.post('/estates', payload)
        dispatch(setMessage(data.message))
    } catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
})

export const fetchEstates = createAsyncThunk('estate/fetchEstates', async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.get('/estates')
        dispatch(setEstates(data.data))
    } catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
})


export const fetchAgentEstates = createAsyncThunk('estate/fetchAgentEstates', async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.get('/estates/agent-estates')
        dispatch(setAgentEstates(data.data))
    } catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
})


export const deleteEstate = createAsyncThunk('estate/deleteEstate', async (id, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.delete(`/estates/${id}`)
        dispatch(setMessage(data.message))
    } catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
})



const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    message: null,
    estates: null,
    agentEstates:null
}

const estateSlice = createSlice({
    name: 'estate',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setError: (state, action) => {
            state.error = true
            state.error = action.payload
        },
        setEstates: (state, action) => {
            state.estates = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        setAgentEstates:(state, action)=>{
            state.agentEstates = action.payload
        }
    }
})


export const { setError, setEstates, setLoading, setMessage, setAgentEstates } = estateSlice.actions
export default estateSlice