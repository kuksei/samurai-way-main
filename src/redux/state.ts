import React from "react";
import {PostType} from "../App";
import {StateType} from "../index";

let rerenderEntireTree = (state: StateType) => {
    console.log("state changed")
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "hello, how are u?", likesCount: 19},
            {id: 2, message: "It`s my first post", likesCount: 25}
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Artem"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Polina"},
            {id: 4, name: "Vadim"},
            {id: 5, name: "Nikita"}
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Yo"},
            {id: 3, message: "How are you?"},
        ]
    },
    sidebar: {
        friends: [{
            id: 1, name: "Artem", avatar: "https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg"
        }, {
            id: 2, name: "Andrew", avatar: "https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808"
        }, {
            id: 3, name: "Polina", avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
        }]
    }
}

export const addPost = () => {
    let newPost: PostType = {id: 3, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const updateNewPostText = (value: string) => {
    state.profilePage.newPostText = value
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}



export default state