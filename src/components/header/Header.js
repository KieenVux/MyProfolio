import React, { useContext } from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink, Link } from "react-router-dom";
import SeoHeader from "../seoHeader/SeoHeader";
import { ThemeContext } from "../../contexts/ThemeContext";
import { greeting, settings } from "../../portfolio";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

export default function Header({ theme }) {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  const link = settings.isSplash ? "/splash" : "/home";
  const language = localStorage.getItem("language") || "en";

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ja" : "en";
    localStorage.setItem("language", newLang);
    window.location.reload();
  };

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <NavLink to={link}  className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <NavLink
                to="/home"
                
                style={({ isActive }) => ({ color: theme.text, fontWeight: isActive ? "bold" : "normal" })}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                {language === "ja" ? "ホーム" : "Home"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                
                style={({ isActive }) => ({ color: theme.text, fontWeight: isActive ? "bold" : "normal" })}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                {language === "ja" ? "学歴" : "Education"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                
                style={({ isActive }) => ({ color: theme.text, fontWeight: isActive ? "bold" : "normal" })}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                {language === "ja" ? "経歴" : "Experience"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                
                style={({ isActive }) => ({ color: theme.text, fontWeight: isActive ? "bold" : "normal" })}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                {language === "ja" ? "お問い合わせ" : "Contact Me"}
              </NavLink>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <button
                onClick={toggleLanguage}
                style={{
                  background: "transparent",
                  border: `1px solid ${theme.text}`,
                  color: theme.text,
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {language === "en" ? "JP" : "EN"}
              </button>
              <button
                onClick={toggleTheme}
                style={{
                  background: "transparent",
                  border: `1px solid ${theme.text}`,
                  color: theme.text,
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              >
                {themeMode === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
