import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Details from "./pages/Details";
import { useState } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <BrowserRouter>
      <div className={`App ${theme === "light" ? "light-main" : "dark-main"}`}>
        <header className={`${theme}`}>
          <div className="header-text">Where in the world?</div>
          <div className="header-holder">
            <div className="theme-switcher">
              {theme === "light" ? <BsMoon /> : <BsFillMoonFill />}
              <span className="dark-mode" onClick={toggleTheme}>
                Dark Mode
              </span>
            </div>
          </div>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Countries theme={theme} />} />
            <Route path="/:name" element={<Details theme={theme} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
