import { Link, useLocation } from "react-router-dom";
import Icon from "../Icon";
import { IconsNames } from "../Icon/types";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import "./styles/index.scss";

export const Header = () => {
  const { pathname } = useLocation();

  const isMainPage = !pathname.includes("/saved");

  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isLightTheme ? "" : "header_dark"}`}>
      <nav>
        <ul className="menu">
          <li
            className={`menu__item ${
              isMainPage
                ? `menu__item_active ${
                    isLightTheme ? "" : "menu__item_active_dark"
                  }`
                : ``
            }`}
          >
            <Link to="/">Randomiser</Link>
          </li>
          <li
            className={`menu__item ${
              !isMainPage
                ? `menu__item_active ${
                    isLightTheme ? "" : "menu__item_active_dark"
                  }`
                : ``
            }`}
          >
            <Link to="/saved">Saved words</Link>
          </li>
          <li
            className={`menu__item menu__toggler ${
              isLightTheme ? "" : "menu__toggler_dark"
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
