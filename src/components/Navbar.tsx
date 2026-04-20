import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const themeContext = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Phits123 Portfolio</h2>

      <div className="nav-right">
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </div>

        <select
          className="theme-select"
          value={themeContext?.theme}
          onChange={(e) => themeContext?.setTheme(e.target.value as "light" | "dark" | "blue")}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </nav>
  );
}