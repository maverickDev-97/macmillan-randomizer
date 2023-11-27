import { useContext } from "react";
import "./styles/index.scss";
import { ThemeContext } from "../../contexts/themeContext";

export const Footer = () => {
  const { isLightTheme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${isLightTheme ? "" : "footer__dark"}`}>
      <p>Made with ❤️</p>
      <p>
        by{" "}
        <a
          className="footer__link"
          href="https://github.com/maverickDev-97"
          target="_blank"
          rel="noreferrer"
        >
          Dmytro
        </a>
      </p>
    </footer>
  );
};
