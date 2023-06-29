
import { useContext, useEffect } from 'react';
import { Context } from '../../../index';
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import AuthService from '../../../services/AuthService';

const NavBar = observer(() => {

    const { store } = useContext(Context)

    return (
        <nav>
            <div className={classes.div__nav}>
                <div className={classes.logo}><Link className={classes.logo__link} to={'/'}>SSTU-Travel</Link></div>
                <ul className={classes.nav}>
                    <li><Link className={classes.link} to={'/'}>Главная</Link></li>
                    <li><Link className={classes.link} to={'/tours'}>Туры</Link></li>
                    {
                        (localStorage.getItem("token") == undefined || localStorage.getItem("token") == null)
                            ? <li><Link className={classes.link} to={'/login'}>Вход/Регистрация</Link></li>
                            : <li><Link className={classes.link} to={'/profile'}>Мой профиль</Link> <Link className={classes.link} to={'/logout'}>Выйти</Link></li>
                    }
                </ul>

            </div>
        </nav>
    )
})

export default NavBar;