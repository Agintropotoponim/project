import { useState } from "react";
import NavBar from "../components/UI/Nav/NavBar";
import classes from './EmployeePanel.module.css'
import loginClasses from './LoginForm.module.css'

import AuthService from "../services/AuthService";
import EmployeeService from "../services/EmployeeService";

function AdminPanel() {

    const user = AuthService.decryptAndGetDataFromLocalStorage();

    const [user_id, setUserId] = useState(-1);
    const [role_id, setRoleId] = useState(-1);


    return (
        <div>
            <NavBar />
            {
                user.roles.includes("ROLE_ADMIN")
                    ?
                    <div className={classes.flex}>
                        <input className={loginClasses.input} type="text" placeholder="user_id"
                            value={user_id}
                            onChange={(e) => {
                                setUserId(e.target.value)
                            }}
                        />
                        <input className={loginClasses.input} type="text" placeholder="role_id"
                            value={role_id}
                            onChange={(e) => {
                                setRoleId(e.target.value)
                            }}
                        />
                        <button
                            className={loginClasses.button}
                            onClick={() => {
                                EmployeeService.insertAuth({
                                    user_id: user_id,
                                    role_id: role_id
                                })
                            }}
                        >
                            Создать
                        </button>
                    </div>
                    : ""
            }
        </div>
    );
}

export default AdminPanel;