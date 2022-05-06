import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../App";

type ProfilePropsType = {
    state: {posts: Array<PostType>
            newPostText: string}
    addPost: () => void
    changeNewPostText: (value: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} changeNewPostText={props.changeNewPostText} addPost={props.addPost}/>
        </div>

    )
};