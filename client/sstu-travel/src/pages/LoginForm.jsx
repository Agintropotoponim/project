import { useContext, useState } from "react";
import { Context } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import classes from './LoginForm.module.css'



function LoginForm() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { store } = useContext(Context)

    const navigate = useNavigate();

    const [errors, setErros] = useState("")

    return (
        <div className={classes.flex + " " + classes.input__size}>

            <div>{errors}</div>

            <input
                className={classes.input}
                type="text"
                placeholder="username"
                onChange={e => setUsername(e.target.value)}
                value={username}
            />
            <input
                className={classes.input}
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />

            <button
                className={classes.button}
                onClick={async () => {
                    try {
                        if (username && password) {
                            const resp = await store.login(username, password);
                            if (resp) await navigate("/")
                        } else {
                            alert("Все поля должны быть заполнены")
                        }

                    } catch (e) {
                        console.log(e)
                    }
                }
                }>Login</button>

            <div className={classes.flex}>
                Don't have an account?
                <Link to={'/registration'}>Регистрация</Link>
                <br />
                <Link to={"/"}>На главную</Link>
            </div>
        </div>
    );
}

export default LoginForm;