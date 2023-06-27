
import { useContext } from 'react';
import { Context } from '../../..';
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {

    const { store } = useContext(Context)


    return (
        <nav>
            <div className={classes.div__nav}>
                <div className={classes.logo}><Link className={classes.logo__link} to={'/'}>SSTU-Travel</Link></div>
                <ul className={classes.nav}>
                    <li><Link className={classes.link} to={'/'}>Главная</Link></li>
                    <li><Link className={classes.link} to={'/about'}>Про нас</Link></li>
                    <li><Link className={classes.link} to={'/tours'}>Туры</Link></li>
                    {
                        !store.isAuth && !localStorage.getItem("token") ?
                            <li><Link className={classes.link} to={'/login'}>Вход/Регистрация</Link></li>
                            : <li><Link className={classes.link} to={'/logout'}>Выйти</Link></li>
                    }

                </ul>

            </div>
        </nav>
    )
}

export default NavBar;