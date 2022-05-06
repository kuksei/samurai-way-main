import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
type DialogItemProps = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemProps) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808" alt="" className={s.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}