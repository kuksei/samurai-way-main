import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../App";
import {text} from "stream/consumers";

type DialogsPropsType = {
    state: {
        dialogs: Array<DialogsType>
        messages: Array<MessagesType>
    }
}

export const Dialogs = (props:DialogsPropsType) => {


    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m) => <Message message={m.message}/>)

    let messageRef = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(messageRef.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={messageRef}></textarea>
            <button onClick={addMessage}>add message</button>
        </div>
    )
};