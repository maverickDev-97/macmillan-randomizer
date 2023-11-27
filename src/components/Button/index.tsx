import { FC, useContext } from "react";

import "./styles/index.css";
import { ButtonProps } from "./types";
import { ThemeContext } from "../../contexts/themeContext";

const Button: FC<ButtonProps> = ({ text, isPrimary, onClick }) => {
  const { isLightTheme } = useContext(ThemeContext);

  const buttonClass = `button ${isPrimary ? "button_isPrimary" : ""} ${
    isLightTheme ? "" : "button_dark"
  }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
