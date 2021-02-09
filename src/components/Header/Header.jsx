import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

/*let s = {
//'header': 'Header_header__3mObx'
}*/



const Header = () => {
return <nav className={s.header}>
    <NavLink to="/profile">
        <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'></img>
    </NavLink>
</nav>


}

export default Header;