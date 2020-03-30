import React from "react";

import "./styles.scss";
import Navbarcommon from "../../components/Navbar/NavbarCommon";

export default function SelectFloor() {
  return (
    <div className="selectfloor">
      <Navbarcommon />
      <div className="container">
        <div>
          <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
            Escolha o andar
          </h1>
          <div className="floor">
            <div className="btn">S1</div>
            <div className="btn">S2</div>
            <div className="btn">S3</div>
            <div className="btn">S4</div>
          </div>
        </div>
        <div>
          <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
            Vagas Disponíveis
          </h1>
          <div className="building borda"></div>
        </div>
      </div>
    </div>
  );
}
