
import { useEffect, useState } from "react";
import AuthService from "../services/AuthService";
import classes from "./Profile.module.css"
import loginClasses from './LoginForm.module.css'
import $api from "../http";
import NavBar from "../components/UI/Nav/NavBar";
import UserService from "../services/UserService";
import { Link, useNavigate } from "react-router-dom";
import Tour from "../components/UI/Tour/Tour";

function Profile() {

    const user = AuthService.decryptAndGetDataFromLocalStorage();

    const [userTours, setUserTours] = useState([])


    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name ? user.name : "");
    const [surname, setSurname] = useState(user.surname ? user.surname : "");
    const [middleName, setMiddleName] = useState(user.middle_name ? user.middle_name : "");
    const [userpic, setUserpic] = useState(user.userpic ? user.userpic : "");


    const [usernameStatus, setUsernameStatus] = useState(true);
    const [emailStatus, setEmailStatus] = useState(true);

    const [tours, setTours] = useState([])

    //const [passwordStatus, setPasswordStatus] = useState(true);

    useEffect(() => {
        $api.post(`/api/users/existbyusername`, { username, email })
            .then(r => setUsernameStatus(r.data))
    }, [username])

    useEffect(() => {
        $api.post(`/api/users/existbyemail`, { username, email })
            .then(r => setEmailStatus(r.data))
    }, [email])

    const navigate = useNavigate();

    useEffect(() => {
        UserService.getUserTours(user.id).then(
            res => {
                setTours(res.data)
            }
        )
    }, [])



    return (

        <div className={classes.flex}>
            <NavBar />
            <div className={classes.flex}>
                <img className={classes.photo} src={user.userpic} alt="" />
                <span>username: {user.username}</span>
            </div>
            <div className={classes.flex + " " + classes.size}>
                <div>
                    <label>username</label>
                    <input className={loginClasses.input} type="text" placeholder="username" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <span>
                        {
                            username != "" && username != user.username
                                ? (usernameStatus
                                    ? <div className={classes.red}>Имя занято</div>
                                    : <div className={classes.green}>Имя свободно</div>)
                                : ""
                        }
                    </span>
                </div>
                <div>
                    <label>Email</label>
                    <input className={loginClasses.input} type="text" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span>
                        {
                            email != "" && email != user.email
                                ? (emailStatus
                                    ? <div className={classes.red}>Почта занята</div>
                                    : <div className={classes.green}>Почта свободна</div>)
                                : ""
                        }
                    </span>
                </div>
                <div>
                    <label>Имя</label>
                    <input className={loginClasses.input} type="text" placeholder="Имя" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Фамилия</label>
                    <input className={loginClasses.input} type="text" placeholder="Фамилия" value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div>
                    <label>Отчество</label>
                    <input className={loginClasses.input} type="text" placeholder="Отчество" value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Ссылка на фото профиля</label>
                    <input className={loginClasses.input} type="text" placeholder="Ссылка на фото профиля" value={userpic}
                        onChange={(e) => setUserpic(e.target.value)}
                    />
                </div>
            </div>

            <button
                onClick={() => {

                    const updateInfo = {
                        id: user.id,
                        name: name,
                        surname: surname,
                        middle_name: middleName,
                        userpic: userpic,
                        email: email,
                        username: username,
                        roles: user.roles
                    }


                    if ((username && email)) {
                        if ((username == user.username || !usernameStatus) && (email == user.email || !emailStatus)) {
                            UserService.saveCredentials(updateInfo);
                            AuthService.encryptAndSaveDataToLocalStorage(updateInfo)
                            navigate('/profile')
                        } else {
                            alert("username и email не должны быть заняты")
                        }
                    } else {
                        alert("Поля username и email не могут оставаться пустыми")
                    }

                }

                }
            >

                Сохранить
            </button>

            <div>
                {
                    tours
                        ?
                        tours.map(t =>
                            <Link to={`/tours/${t.id}`}>
                                <Tour
                                    className={classes.tour}
                                    key={t.id} cover={t.cover}
                                    text={t.name}
                                    leader={t.employee.usr.name + " " + t.employee.usr.surname}
                                />
                            </Link>
                        )
                        : ""
                }
            </div>


        </div >

    );
}

export default Profile;