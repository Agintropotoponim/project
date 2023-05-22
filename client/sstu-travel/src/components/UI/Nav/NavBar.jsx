
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <div className={classes.div__nav}>
                <div className={classes.logo}><Link className={classes.logo__link} to={'/'}>SSTU-Travel</Link></div>
                <ul className={classes.nav}>
                    <li><Link className={classes.link} to={'/'}>Главная</Link></li>
                    <li><Link className={classes.link} to={'/about'}>Про нас</Link></li>
                    <li><Link className={classes.link} to={'/tours'}>Туры</Link></li>
                    <li><Link className={classes.link} to={'/authentification'}>Вход/Регистрация</Link></li>
                </ul>

            </div>
        </nav>
    ) 
}

export default NavBar;