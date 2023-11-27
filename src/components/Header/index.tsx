import { Link, useLocation } from "react-router-dom";
import "./styles/index.css";
import Icon from "../Icon";
import { IconsNames } from "../Icon/types";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export const Header = () => {
  const { pathname } = useLocation();

  const isMainPage = !pathname.includes("/saved");

  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isLightTheme ? "" : "dark"}`}>
      <nav>
        <ul className="menu">
          <li
            className={`menu__item ${
              isMainPage ? `active ${isLightTheme ? "" : "dark"}` : ``
            }`}
          >
            <Link to="/">Randomiser</Link>
          </li>
          <li
            className={`menu__item ${
              !isMainPage ? `active ${isLightTheme ? "" : "dark"}` : ``
            }`}
          >
            <Link to="/saved">Saved words</Link>
          </li>
          <li
            className={`menu__item menu__item-toggler ${
              isLightTheme ? "" : "dark"
            }`}
            onClick={toggleTheme}
          >
            <Icon
              name={isLightTheme ? IconsNames.MoonIcon : IconsNames.SunIcon}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
