import { useContext } from "react";
import "./styles/index.scss";
import { ThemeContext } from "../../contexts/themeContext";

const Subheading = () => {
  const { isLightTheme } = useContext(ThemeContext);

  return (
    <p className={`subheading ${isLightTheme ? "" : "subheading_dark"}`}>
      The most frequent <span className="subheading__highlight">2,500+</span>{" "}
      words in the English language
    </p>
  );
};

export default Subheading;
