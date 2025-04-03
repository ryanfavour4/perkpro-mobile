import Axios from 'axios'

const baseURL: string = 'http://192.168.43.180:5001/api'

const api = Axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api