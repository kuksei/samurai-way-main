import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (

        <div className={s.content}>
            <div className={s.background_image}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="background"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>

    )
};