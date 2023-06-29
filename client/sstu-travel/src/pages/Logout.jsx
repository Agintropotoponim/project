import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { useContext, useEffect } from "react";


function Logout() {

    const navigate = useNavigate();
    const { store } = useContext(Context);

    useEffect(() => {
        store.logout();
        navigate("/")

    })

    return (
        <div>
            Загрузка...
        </div>

    );
}

export default Logout;