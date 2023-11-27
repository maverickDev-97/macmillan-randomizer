import { FC, useContext } from "react";
import { WarningProps } from "./Warning.types";
import { ThemeContext } from "../../contexts/themeContext";
import "./styles/index.scss";

export const Warning: FC<WarningProps> = ({ children, message }) => {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <div
      className={`warning__container ${
        isLightTheme ? "" : "warning__container_dark"
      }`}
    >
      <p
        className={`warning__message ${
          isLightTheme ? "" : "warning__message_dark"
        }`}
      >
        {message}
      </p>
      {children}
    </div>
  );
};
