import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const API_URL = "http://localhost:8080"



export const SECRET = "HGgKHMDjfjfGHOfmmhmjhijpMOE1E54"


export const API_BANANZ = "http://193.233.233.3:8080"
export const API_KEY = "UzLoXKZ9y46bZtAagdogPSgnTchHd2EDcDORjvEX69cACYreF4kRbLO4L3v7lILxt3RDm89lYN3wI8WDH8GxjXzAMPwqc0eNLixYTFSQgBizOvdeVKxTs4DSbx9plArbNyW7g399zm9eW5DUeAyJlh8k9O98xZAPGQL73f622aXx42gYBICvaa0eToq7zL5IxFDnUTfXDPYS3yYHyeDm3uXMmfR6xC20glwoux76bb8y4ILUc1ETUGZRQDIDVY2"

export const $api_bananz = axios.create({
    baseURL: API_BANANZ
})

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