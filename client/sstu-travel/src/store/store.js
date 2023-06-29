
import { makeAutoObservable, makeObservable } from "mobx"
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL, SECRET } from "../http";
import { useNavigate } from "react-router-dom";


export default class Store {


    constructor() {
        makeAutoObservable(this)
    }

    async login(username, password) {
        try {
            const response = await AuthService.login(username, password);

            localStorage.setItem('token', response.data.token)

            const user = {
                id: response.data.id,
                username: response.data.username,
                userpic: response.data.userpic,
                name: response.data.name,
                surname: response.data.surname,
                middle_name: response.data.middleName,
                email: response.data.email
            }

            AuthService.encryptAndSaveDataToLocalStorage(user)

            return true;

        } catch (e) {

            console.log(e.response?.data?.message)
        }
    }

    async registration(username, email, password) {
        try {
            const response = await AuthService.register(username, email, password);

        } catch (e) {
            console.log("err here")
            console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token')
            localStorage.removeItem('userData')
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }





}