

import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import UserService from "../services/UserService";


function TestAuth() {

    const [data, setData] = useState();

    useEffect(() => {
        UserService.testAdminAPI().then(resp => setData(resp))
    }, []);


    return (
        <div>
            {data}
        </div>
    );
}

export default TestAuth;
