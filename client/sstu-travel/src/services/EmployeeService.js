import $api from "../http";

export default class EmployeeService {




    static createTour({
        name,
        description,
        usr,
        cover,
        price,
        start_date
    }) {
        $api.post(`/tours/panel`, {
            name,
            description,
            usr,
            cover,
            price,
            start_date
        })
    }


    static getUsers() {
        return $api.get(`/api/users`)
    }

    static insertAuth({ user_id, role_id }) {
        $api.post(`/api/users/insert/authorities`, { user_id, role_id });
    }
}
