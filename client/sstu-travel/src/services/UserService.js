import $api from "../http";
import { AxiosResponse } from "axios";

export default class UserService {
    static fetchUsers() {
        return $api.get('/users')
    }

    static testUserAPI() {
        return $api.get('/api/test/user').then((r) => r.data)
    }

    static testAdminAPI() {
        return $api.get('/api/test/emp').then((r) => r.data)
    }
}