import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeContext } from "./contexts/themeContext";
import { Footer } from "./components/Footer";

export const App = () => {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <div>
      <Header />
      <main className={`content ${isLightTheme ? "" : "content_dark"}`}>
        <div className="content__container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
