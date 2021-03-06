import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import Navbarcommon from "../../components/Navbar/NavbarCommon";
import VacancyButton from "../../components/VancancyButton";
import FooterLine from "../../components/FooterLine";

export default function SelectVacancy() {
  const [floor, setFloor] = useState();
  const [permission, setPermission] = useState();
  const history = useHistory();
  const vacancies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  function selectVacancy(vacancySelected, vacancyStatus) {
    if (vacancyStatus === "blocked" || vacancyStatus === "indisponible") {
      alert("Vaga Indisponível");
    } else {
      localStorage.setItem("vacancySelected", vacancySelected);
      localStorage.setItem("vacancyStatus", vacancyStatus);
      history.push("/selectedvacancy");
    }
  }

  useEffect(() => {
    setPermission(localStorage.getItem("permissionAccess"));
    setFloor(localStorage.getItem("floorSelected"));
  }, [history, floor]);

  return (
    <div className="selectvacancy">
      <Navbarcommon path="/selectfloor" />
      <div className="container">
        <div className="header">
          <div className="board txt-white">
            <h1>{floor}</h1>
            <hr />
            <h1>VAGAS: 42</h1>
          </div>
          <div className="subtitle txt-white">
            <div className="subtitle-item">
              <VacancyButton status={"disponible"} number={""} /> Disponível
            </div>
            <div className="subtitle-item">
              <VacancyButton status={"indisponible"} number={""} /> Indisponível
            </div>
            <div className="subtitle-item">
              <VacancyButton status={"wheelchair"} number={""} /> Acessibilidade
            </div>
          </div>
        </div>
        <div className="vacancy-container">
          <div className="vacancy-group">
            <div className="vacancy-row">
              {vacancies.map((vacancy) => (
                <button
                  key={vacancy}
                  type="button"
                  className="no-button"
                  onClick={() => selectVacancy(vacancy, "disponible")}
                >
                  <VacancyButton status={"disponible"} number={vacancy} />
                </button>
              ))}
            </div>
            <div className="vacancy-row">
              {vacancies.map((vacancy) => (
                <button
                  key={vacancy}
                  type="button"
                  className="no-button"
                  onClick={() => selectVacancy(vacancy, "blocked")}
                >
                  <VacancyButton status={"blocked"} number={vacancy} />
                </button>
              ))}
            </div>
            <div className="vacancy-row">
              {vacancies.map((vacancy) => (
                <button
                  key={vacancy}
                  type="button"
                  className="no-button"
                  onClick={() => selectVacancy(vacancy, "disponible")}
                >
                  <VacancyButton status={"disponible"} number={vacancy} />
                </button>
              ))}
            </div>

            <div className="vacancy-row">
              {vacancies.map((vacancy) => (
                <button
                  key={vacancy}
                  type="button"
                  className="no-button"
                  onClick={() => selectVacancy(vacancy, "indisponible")}
                >
                  <VacancyButton status={"indisponible"} number={vacancy} />
                </button>
              ))}
            </div>
            <div className="vacancy-row">
              {vacancies.map((vacancy) => (
                <button
                  key={vacancy}
                  type="button"
                  className="no-button"
                  onClick={() => selectVacancy(vacancy, "blocked")}
                >
                  <VacancyButton status={"blocked"} number={permission} />
                </button>
              ))}
            </div>
            <div className="vacancy-row">
              {vacancies.map((vacancy) => (
                <button
                  key={vacancy}
                  type="button"
                  className="no-button"
                  onClick={() => selectVacancy(vacancy, "wheelchair")}
                >
                  <VacancyButton status={"wheelchair"} number={vacancy} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterLine />
    </div>
  );
}
