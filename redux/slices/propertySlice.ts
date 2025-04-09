import api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProperties = createAsyncThunk("property/fetchAllProperties", async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.get('/properties/')
        dispatch(setProperties(data.data))
    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }

})

export const fetchAgentProperties = createAsyncThunk("property/fetchAgentProperties", async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.get('/properties/agent-properties')
        dispatch(setAgentProperties(data.properties))
        console.log('agent properties', data.properties);

    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }

})

export const deleteProperty = createAsyncThunk("property/deleteProperty", async (id: string, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.delete(`/properties/${id}`)
        dispatch(setSuccess(data.message))
        dispatch(fetchAgentProperties())
    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }

}
)

export const addProperty = createAsyncThunk("property/addProperty", async (property: any, { dispatch, rejectWithValue }) => {
    try {
        console.log('cc');
        dispatch(setLoading())
        const { data } = await api.post('/properties/', property, {
            headers: {
                "Content-Type": 'application/json'
            }
        })

        console.log('data', data);
        dispatch(setSuccess(data.message))
        dispatch(fetchAgentProperties())
    }
    catch (error: any) {
        console.log('error', error);

        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }

}
)

export const editProperty = createAsyncThunk("property/editProperty", async (property: any, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.put(`/properties/${property._id}`, property)
        dispatch(fetchAgentProperties())
    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
})

export const fetchNewProperty = createAsyncThunk("property/fetchNewProperty", async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.get(`/properties/category/new`)
        dispatch(setPropertyDetails(data.data))
    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
}
)

export const fetchPropertyForRent = createAsyncThunk("property/fetchPropertyForRent", async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.get(`/properties/category/rent`)
        dispatch(setPropertyDetails(data.data))
    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
}
)
export const fetchPropertyForSale = createAsyncThunk("property/fetchPropertyForSale", async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(setLoading())
        const { data } = await api.get(`/properties/category/sale`)
        dispatch(setPropertyDetails(data.data))
    }
    catch (error: any) {
        dispatch(setError(error.response.data.message || 'Something went wrong'))
        return rejectWithValue(error.response.data.message || 'Something went wrong')
    }
}
)

const initialState = {
    properties: null,
    selectedProperty: null,
    propertyDetails: null,
    loading: false,
    error: false,
    errorMessage: null,
    agentProperties: [],
    agentPropertyDetails: null,
    message: null,
    newProperties: null,
    propertiesForRent: null,
    propertiesForSale: null,
    success: false
}

const propertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {
        setProperties: (state, action) => {
            state.properties = action.payload
            state.loading = false
        },
        setAgentProperties: (state, action) => {
            state.agentProperties = action.payload
            state.loading = false
        },
        setNewProperties: (state, action) => {
            state.newProperties = action.payload
            state.loading = false
        },
        setPropertiesForRent: (state, action) => {
            state.propertiesForRent = action.payload
            state.loading = false
        },
        setPropertiesForSale: (state, action) => {
            state.propertiesForSale = action.payload
            state.loading = false
        },
        setSelectedProperty: (state, action) => {
            state.selectedProperty = action.payload
            state.loading = false
        },
        setPropertyDetails: (state, action) => {
            state.propertyDetails = action.payload
            state.loading = false
        },
        setLoading: (state) => {
            state.loading = true
        },
        setError: (state, action) => {
            state.error = true
            state.errorMessage = action.payload
        },
        clearPropertyLog: (state) => {
            state.error = false
            state.errorMessage = null
            state.loading = false
            state.message = null
            state.success = false
        },
        setSuccess: (state, action) => {
            state.success = true
            state.message = action.payload
        }
    },
})

export const { setProperties, setSelectedProperty, setPropertyDetails, setLoading, setError, setAgentProperties, setNewProperties, setPropertiesForRent, setPropertiesForSale, clearPropertyLog, setSuccess } = propertySlice.actions
export default propertySlice;