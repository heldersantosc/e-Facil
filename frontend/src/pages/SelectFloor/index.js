import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import Navbarcommon from "../../components/Navbar/NavbarCommon";
import FooterLine from "../../components/FooterLine";

export default function SelectFloor() {
  const [option, setOption] = useState();
  const [permission, setPermission] = useState();
  const history = useHistory();

  function handleOption(optionValue) {
    if (permission === "true") {
      setOption(optionValue);
      history.push("/selectvacancy");

      localStorage.setItem("optionValue", optionValue);
    }
    if (permission === null) {
      history.push("/login");
    }
  }

  useEffect(() => {
    setPermission(localStorage.getItem("permissionAccess"));
  }, [history, option]);

  return (
    <>
      <div className="selectfloor">
        <Navbarcommon />
        <div className="container">
          <div>
            <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
              Escolha o andar
            </h1>
            <div className="floor">
              <button
                className="btn no-button"
                onClick={() => handleOption("S1")}
              >
                S1
              </button>
              <button
                className="btn no-button"
                onClick={() => handleOption("S2")}
              >
                S2
              </button>
              <button
                className="btn no-button"
                onClick={() => handleOption("S3")}
              >
                S3
              </button>
            </div>
          </div>
          <div>
            <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
              Vagas Disponíveis
            </h1>
            <div className="building borda">
              <div className="board">
                <h1>S1</h1>
                <hr />
                <h1>VAGAS: 42</h1>
              </div>
              <div className="board">
                <h1>S1</h1>
                <hr />
                <h1>VAGAS: 42</h1>
              </div>
              <div className="board">
                <h1>S1</h1>
                <hr />
                <h1>VAGAS: 42</h1>
              </div>

              <div className="entrance">
                <div className="door"></div>
                <div className="door"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLine />
    </>
  );
}
