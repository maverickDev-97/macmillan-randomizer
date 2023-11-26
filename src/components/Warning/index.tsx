import { FC } from "react";
import "./styles/index.css";
import { WarningProps } from "./Warning.types";

export const Warning: FC<WarningProps> = ({ children, message }) => {
  return (
    <div className="warning__container">
      <p className="warning__message">{message}</p>
      {children}
    </div>
  );
};
