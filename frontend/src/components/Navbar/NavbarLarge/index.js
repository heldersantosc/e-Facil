import React from "react";

import "./styles.scss";
import logo1 from "../../../assets/logo-ser-branca.png";
import logo2 from "../../../assets/e-facil_white.png";

export default function NavbarLarge() {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={logo1} alt="" />
      <img className="navbar-logo" src={logo2} alt="" />
    </nav>
  );
}
