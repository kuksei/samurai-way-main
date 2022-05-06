import React from "react";
import s from "./Post.module.css";

type PostType = {
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg" alt="avatar" className={s.avatar}/> {props.message}
            <div>
                <span>  {props.likesCount} Likes</span>
            </div>
        </div>

    )
};