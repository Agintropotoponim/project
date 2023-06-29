import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const API_URL = "http://localhost:8080"
export const SECRET = "HGgKHMDjfjfGHOfmmhmjhijpMOE1E54"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use(config => {
    console.log("request intercepred")
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})


$api.interceptors.response.use(config => {
    return config;
}, (async error => {

    if (error.response.status == 401) {
        const navigate = useNavigate();
        console.log("401")
        await navigate("/login")
    }

})
)

export default $api