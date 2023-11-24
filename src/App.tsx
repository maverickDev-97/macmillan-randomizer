import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
