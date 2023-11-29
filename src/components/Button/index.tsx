import { FC, useContext } from "react";
import { ButtonProps } from "./types";
import { ThemeContext } from "../../contexts/themeContext";
import "./styles/index.scss";

const Button: FC<ButtonProps> = ({ text, isPrimary, onClick, disabled }) => {
  const { isLightTheme } = useContext(ThemeContext);

  const buttonClass = `button ${isPrimary ? "button_isPrimary" : ""} ${
    isLightTheme ? "" : "button_dark"
  }`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
