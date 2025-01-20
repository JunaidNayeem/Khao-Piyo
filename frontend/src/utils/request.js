import axios from 'axios'

const httpRequest = axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    // baseURL: "http://localhost:8000/api",
    baseURL: "https://khao-piyob.junaidnayeem.in",
    withCredentials: true,
})

export default httpRequest