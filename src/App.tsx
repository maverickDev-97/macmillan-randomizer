import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeContext } from "./contexts/themeContext";
import "./App.css";

export const App = () => {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <div className="App">
      <Header />
      <main className={`content ${isLightTheme ? "" : "dark"}`}>
        <div className="content__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
