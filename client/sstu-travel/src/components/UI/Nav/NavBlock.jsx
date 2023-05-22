import React from 'react';
import classes from './NavBlock.module.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import logo from "../../../assets/img/Vector 1.svg"
import NavBar from './NavBar';
import button from "../../../assets/img/button.svg"
import CustomButton from '../button/CustomButton';

function NavBlock() {

    return (

        <div className={classes.nav__block}>
            <NavBar />
            <div className={classes.logo}>
                <h1 className={classes.header}>SSTU Travel</h1>
                <h2 className={classes.sub__header}>Туры и горные походы</h2>
                <CustomButton text={"Хочу пойти"} />
            </div>
        </div>

    )
}

export default NavBlock