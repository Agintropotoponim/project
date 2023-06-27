import $api from "../http";
import { AxiosResponse } from "axios";

export default class AuthService {

    static async login(username, password) {
        //console.log($api.post('/api/auth/signin', { username, password }))
        return $api.post('/api/auth/signin', { username, password })
    }

    static async register(username, email, password) {
        return $api.post('/api/auth/signup', { username, email, password })
    }

    static async logout() {
        return $api.post('/logout')
    }

    static testUserAPI() {
        return $api.get('/api/test/user');
    }
}