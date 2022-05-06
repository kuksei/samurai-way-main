import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
    addPost: () => void
    changeNewPostText: (value: string) => void
}

type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
        if (newPostElement.current) {
            props.changeNewPostText("")
        }
    }

    let onPostChange = () => {
        props.changeNewPostText(newPostElement.current ? newPostElement.current.value : "----")
    }

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};