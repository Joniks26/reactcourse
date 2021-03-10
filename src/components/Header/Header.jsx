import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
return <nav className={s.header}>
    <NavLink to="/profile/15370">
        <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'></img>
    </NavLink>

    <div className={s.loginBlock}>
        { props.isAuth ? props.login
       : <NavLink to={'/login'}>Login</NavLink> }
    </div>
</nav>


}

export default Header;