import React from 'react';
import Style from './Nav.module.css';
import movieLogo from '../../img/movieLogo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={Style.nav}>
            <Link to="/">
                <img src={movieLogo}></img>
            </Link>
        </nav>
    )
}

export default Nav
