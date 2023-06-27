
import { makeAutoObservable, makeObservable } from "mobx"
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";


export default class Store {

    user = {}
    isAuth = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(boolean) {
        this.isAuth = boolean
    }

    setUser(user) {
        this.user = user;
    }

    async login(username, password) {
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.token)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(username, password) {
        try {
            const response = await AuthService.registration(username, password);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    /*
    async testAuth() {
        try {
            const response = await AuthService.testUserAPI();
            return response.data;
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
    */

    async checkAuth() {
        try {
            const response = axios.get(`${API_URL}/refresh`)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }


}