import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import api from "../../services/api";

import "./styles.scss";

import NavbarLarge from "../../components/Navbar/NavbarLarge";

export default function Unit() {
  const [visible, setVisible] = useState(false);
  const [unitList, setUnitList] = useState([]);

  function chooseUnit() {
    setVisible(!visible);
  }

  useEffect(() => {
    api.get("/unit").then(response => {
      setUnitList(response.data);
      //console.log(unitList);
    });
  }, [unitList]);

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
            {unitList.map(unit => (
              <Link key={unit.id} to="/login">
                <li>
                  <span>{unit.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
