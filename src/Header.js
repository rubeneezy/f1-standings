// src/Header.js

import React from "react";
import "./Header.css"; // Create this CSS file for styling
import logo from "./resources/F1-logo.png";
const Header = () => (
  <header className="site-header">
    <img src={logo} alt="F1 Logo" className="header-logo" />
    <h1>F(riends)1 Standings</h1>
  </header>
);

export default Header;
