import { Link, useLocation } from "react-router-dom";
import "./styles/index.css";

export const Header = () => {
  const { pathname } = useLocation();

  const isMainPage = !pathname.includes("/saved");

  return (
    <header className="header">
      <nav>
        <ul className="menu">
          <li className={`menu__item ${isMainPage ? "active" : ""}`}>
            <Link to="/">Randomizer</Link>
          </li>
          <li className={`menu__item ${!isMainPage ? "active" : ""}`}>
            <Link to="/saved">Saved words</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
