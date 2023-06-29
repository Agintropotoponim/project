import $api, { SECRET } from "../http";
import { AxiosResponse } from "axios";


const CryptoJS = require("crypto-js");

export default class AuthService {

    static async login(username, password) {
        //console.log($api.post('/api/auth/signin', { username, password }))
        return $api.post('/api/auth/signin', { username, password })
    }

    static async register(username, email, password) {
        return $api.post('/api/auth/signup', { username, email, password })
    }





    static encryptAndSaveDataToLocalStorage(data) {

        const jsonData = JSON.stringify(data);

        const encryptedData = CryptoJS.AES.encrypt(jsonData, SECRET).toString();

        localStorage.setItem("userData", encryptedData);
    }

    static decryptAndGetDataFromLocalStorage() {

        const encryptedData = localStorage.getItem("userData");

        const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, SECRET);

        const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);

        const jsonData = JSON.parse(decryptedData);

        return jsonData;
    }
}