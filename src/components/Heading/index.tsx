import { useContext } from "react";
import "./styles/index.scss";
import { ThemeContext } from "../../contexts/themeContext";

const Heading = () => {
  const { isLightTheme } = useContext(ThemeContext);

  return (
    <h1 className={`heading ${isLightTheme ? "" : "heading_dark"}`}>
      Macmillan's Dictionary Randomiser
    </h1>
  );
};

export default Heading;
