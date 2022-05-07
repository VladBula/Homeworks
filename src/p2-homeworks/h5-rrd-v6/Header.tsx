import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}>Junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
