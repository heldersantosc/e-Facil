import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";

import "./styles.scss";

import NavbarLarge from "../../components/Navbar/NavbarLarge";

export default function Unit() {
  const [visible, setVisible] = useState(false);

  function chooseUnit() {
    setVisible(!visible);
    console.log(visible);
  }

  return (
    <div className="unit">
      <NavbarLarge />
      <div className="container">
        <div className="btn" onClick={() => chooseUnit()}>
          Selecione a Unidade
          {visible ? <FiMinus /> : <FiPlus />}
        </div>
        <div className={`content-list ${visible ? "collapse" : ""}`}>
          <ul>
            <Link to="/login">
              <li>
                <span>Unidade 1</span>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <span>Unidade 2</span>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <span>Unidade 3</span>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <span>Unidade 4</span>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <span>Unidade 5</span>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <span>Unidade 6</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
