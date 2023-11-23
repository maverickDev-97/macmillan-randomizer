import { Link } from "react-router-dom";
import "./styles/index.css";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="menu">
          <li className="menu__item">
            <Link to="/">Randomizer</Link>
          </li>
          <li className="menu__item">
            <Link to="/saved">Saved words</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
