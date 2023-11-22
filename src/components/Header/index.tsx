import "./styles/index.css";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="menu">
          <li className="menu__item">Randomizer</li>
          <li className="menu__item">Saved words</li>
        </ul>
      </nav>
    </header>
  );
};
