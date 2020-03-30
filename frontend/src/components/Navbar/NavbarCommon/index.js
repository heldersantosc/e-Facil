import React from "react";

import "./styles.scss";
import logo1 from "../../../assets/logo-ser-branca.png";
import logo2 from "../../../assets/e-facil_white.png";
import logo3 from "../../../assets/ion_arrow-back-circle-sharp.png";
import { Link } from "react-router-dom";

export default function NavbarCommon() {
  return (
    <nav className="navbarcommon">
      <Link className="backButton" to="/login">
        <img height="100%" src={logo3} alt="" />
      </Link>
      <div className="logos">
        <img className="navbar-logo" src={logo1} alt="" />
        <img className="navbar-logo" src={logo2} alt="" />
      </div>
    </nav>
  );
}
