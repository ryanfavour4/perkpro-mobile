import api from "@/utils/api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async (_, { dispatch, rejectWithValue }) => {
    try {
        console.log('s');
        const { data } = await api.get('/wishlists/')
        console.log('wishlist-data', data);
        dispatch(setWishlist(data.data))
    }
    catch (error: any) {
        console.log('wishlist-error', error);
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
}
)

export const addToWishlist = createAsyncThunk("wishlist/addToWishlist", async (payload: any, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await api.post('/wishlists/', payload)
        dispatch(fetchWishlist())
        dispatch(setMessage(data.message))
    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
}
)
export const removeFromWishlist = createAsyncThunk("wishlist/removeFromWishlist", async (propertyId: string, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await api.delete(`/wishlists/${propertyId}`)
        dispatch(fetchWishlist())
        dispatch(setMessage(data.message))
    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
}
)

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: null,
        loading: false,
        error: false,
        errorMessage: null,
        message: null,
    },
    reducers: {
        setWishlist: (state, action) => {
            state.wishlist = action.payload
        },
        setLoading: (state) => {
            state.loading = true
        },
        setError: (state, action) => {
            state.error = true
            state.errorMessage = action.payload
        },
        clearWishlistLog: (state) => {
            state.error = false
            state.errorMessage = null
            state.loading = false
            state.message = null
        },
        setMessage: (state, action) => {
            state.message = action.payload
        }
    },
})

export const {
    setWishlist,
    setLoading,
    setError,
    clearWishlistLog,
    setMessage
} = wishlistSlice.actions

export default wishlistSlice