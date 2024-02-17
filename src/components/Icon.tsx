import React from 'react';
import iconsSprite from '../assets/image/AH.svg'

export type iconIdType="ah" | "instagram" | "telegram" | "vk"

type IconPropsType = {
    iconId: iconIdType
    width?: string,
    height?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "48"} height={props.height || "48"}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

