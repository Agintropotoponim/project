import $api from "../http";
import { AxiosResponse } from "axios";

export default class UserService {
    static fetchUsers() {
        return $api.get('/users')
    }

    static testUserAPI() {
        return $api.get('/api/test/user')
    }

    static testAdminAPI() {
        return $api.get('/api/test/admin')
    }

    static saveCredentials({ id, name, surname, middle_name, userpic, email, username }) {
        return $api.put(`/api/users/${id}`, {
            name,
            surname,
            middle_name,
            userpic,
            email,
            username
        });
    }

    static buyTour({ user_id, tour_id }) {
        return $api.post(`/api/buying`, { user_id, tour_id })
    }

    static checkBuy({ user_id, tour_id }) {
        console.log($api.post(`/api/buying/check`, { user_id, tour_id }))
        return $api.post(`/api/buying/check`, { user_id, tour_id })
    }

    static getUserTours(user_id) {
        return $api.get(`/api/buying/my/${user_id}`)
    }

}