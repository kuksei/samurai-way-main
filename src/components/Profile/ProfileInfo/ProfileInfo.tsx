import React from "react";
import s from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background_image}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="background"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

