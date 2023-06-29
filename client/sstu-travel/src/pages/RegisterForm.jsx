import { useContext, useEffect, useState } from "react";
import { Context } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import classes from './LoginForm.module.css'
import $api from "../http/index.js";

import Input from 'react-validation/build/input';


function RegisterForm() {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store } = useContext(Context)

    const navigate = useNavigate();

    const [usernameStatus, setUsernameStatus] = useState(true);
    const [emailStatus, setEmailStatus] = useState(true);

    //const [passwordStatus, setPasswordStatus] = useState(true);

    useEffect(() => {
        $api.post(`/api/users/existbyusername`, { username, email })
            .then(r => setUsernameStatus(r.data))
    }, [username])

    useEffect(() => {
        $api.post(`/api/users/existbyemail`, { username, email })
            .then(r => setEmailStatus(r.data))
    }, [email])



    return (
        <div className={classes.flex + " " + classes.input__size}>
            <div>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
                <span>
                    {
                        username != ""
                            ? (usernameStatus
                                ? <div className={classes.red}>Имя занято</div>
                                : <div className={classes.green}>Имя свободно</div>)
                            : ""
                    }
                </span>
            </div>

            <div>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <span>
                    {
                        email != ""
                            ? (emailStatus
                                ? <div className={classes.red}>Почта занята</div>
                                : <div className={classes.green}>Почта свободна</div>)
                            : ""
                    }
                </span>
            </div>

            <input
                className={classes.input}
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />

            <div className={classes.flex}>
                <button className={classes.button} onClick={async () => {
                    if (username && email && password) {
                        await store.registration(username, email, password);
                        await navigate("/login")
                    } else {
                        alert("Все поля должны быть заполнены")
                    }
                }}>Registration</button>
                <Link to={"/"}>На главную</Link>
            </div>


        </div>
    );
}

export default RegisterForm;