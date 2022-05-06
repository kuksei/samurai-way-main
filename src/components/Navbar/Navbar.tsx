import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';
import {FriendType} from "../../App";

type NavbarPropsType = {
    state:{
        friends: Array<FriendType>
    }
}

export const Navbar = (props: NavbarPropsType) => {
    let friendsElements = props.state.friends.map((f) => {
        return (
            <div>
                <img src={f.avatar} className={s.circle}></img>
                <span>{f.name}</span>
            </div>
        )
    })

    return (
        <nav className={s.navbar}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={`${s.item}`}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>

            <div className={s.friendsTitle}>FRIENDS</div>
            <div className={s.friends}>
                {friendsElements}
            </div>

        </nav>
    )
};