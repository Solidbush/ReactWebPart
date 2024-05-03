import React from "react";
import {NavLink} from "react-router-dom";
import style from "./NavBar.module.css"
import loginImage from "../../assets/images/login.png"
const NavBar = (props) => {
    return (
        <nav className>
            <NavLink to={"/main-page"} className={props => props.isActive ? style.active : style.nav__item}>Главная страница</NavLink>
            <NavLink to={"/all-courses"} className={props => props.isActive ? style.active : style.nav__item}>Все курсы</NavLink>
            <NavLink to={"/comments-page"} className={props => props.isActive ? style.active : style.nav__item}>Отзывы</NavLink>
            <NavLink to={"/contacts"} className={props => props.isActive ? style.active : style.nav__item}>Контакты</NavLink>
            <NavLink to={"/login-page"} className={props => props.isActive ? style.active : style.nav__item}><img src={loginImage} alt="Login"/></NavLink>
        </nav>
    )
}

export default NavBar