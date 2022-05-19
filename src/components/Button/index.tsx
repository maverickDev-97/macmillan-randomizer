import { FC } from "react";

import "./styles/index.css";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ text, isPrimary, onClick }) => {
    const buttonClass = isPrimary ? "button isPrimary" : "button";
    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;