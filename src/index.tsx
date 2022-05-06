import './index.css';
import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogsType, FriendType, MessagesType, PostType} from './App';
import {addPost, updateNewPostText} from "./redux/state";
import {subscribe} from "./redux/state";

export type StateType = {
    profilePage: {
        posts: Array<PostType>,
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<DialogsType>,
        messages: Array<MessagesType>
    },
    sidebar: {
        friends: Array<FriendType>
    }
}
 const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} changeNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)

subscribe(rerenderEntireTree)