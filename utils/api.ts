import Axios from 'axios'
import * as SecureStore from 'expo-secure-store';


const baseURL: string = 'http://192.168.43.180:5001/api'

const api = Axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

// Add a request interceptor to attach the token
api.interceptors.request.use(
    async config => {
        const token = await SecureStore.getItemAsync('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

export default api
