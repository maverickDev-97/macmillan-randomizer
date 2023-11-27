import { FC, useContext } from "react";
import "./styles/index.css";
import { WarningProps } from "./Warning.types";
import { ThemeContext } from "../../contexts/themeContext";

export const Warning: FC<WarningProps> = ({ children, message }) => {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <div
      className={`warning__container ${
        isLightTheme ? "" : "warning__container_dark"
      }`}
    >
      <p className="warning__message">{message}</p>
      {children}
    </div>
  );
};
