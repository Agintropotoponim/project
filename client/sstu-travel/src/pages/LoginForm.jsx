import { useContext, useState } from "react";
import { Context } from "../index.js";



function LoginForm() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { store } = useContext(Context)



    return (
        <div>
            <input
                type="text"
                placeholder="username"
                onChange={e => setUsername(e.target.value)}
                value={username}
            />
            <input
                type="text"
                placeholder="passord"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />

            <button onClick={() => { store.login(username, password); }}>Login</button>
        </div>
    );
}

export default LoginForm;