import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbarcommon from "../../components/Navbar/NavbarCommon";
import FooterLine from "../../components/FooterLine";

export default function SelectVacancy() {
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
    <div className="selectvacancy">
      <Navbarcommon path="/selectfloor" />
      <div className="container"></div>
      <FooterLine />
    </div>
  );
}
