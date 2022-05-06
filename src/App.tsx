import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {SettingsPage} from "./components/Settings/SettingsPage";
import {updateNewPostText} from "./redux/state";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

export type FriendType = {
    id: number,
    name: string,
    avatar: string
}

type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<PostType>
            newPostText: string
        }
        dialogsPage: {
            dialogs: Array<DialogsType>
            messages: Array<MessagesType>
        }
        sidebar: {
            friends: Array<FriendType>
        }
    }
    addPost: () => void
    changeNewPostText: (value: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>

                    <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  changeNewPostText={props.changeNewPostText}/>}/>

                    <Route path="/news" render={() => <News/>}/>

                    <Route path="/music" render={() => <Music/>}/>

                    <Route path="/settings" render={() => <SettingsPage/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
