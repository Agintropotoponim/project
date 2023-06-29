import React from 'react';
import classes from './NavBlock.module.css'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import CustomButton from '../button/CustomButton';

function NavBlock() {

    return (

        <div className={classes.nav__block}>
            <NavBar />
            <div className={classes.logo}>
                <h1 className={classes.header}>SSTU Travel</h1>
                <h2 className={classes.sub__header}>Туры и горные походы</h2>
                <Link to="/tours"><CustomButton text={"Хочу пойти"} /></Link>
            </div>
        </div>

    )
}

export default NavBlock