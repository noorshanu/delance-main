import React from "react";
import "./Tokenomic.css";
import Dash from "../../assets/dash.svg";
import DeelanceContract from "layouts/Home/DeelanceContract";
import { useTranslation } from "react-i18next";
// import LottieToken from "./LottieToken";
// import animationData from './Token.json'
import Test from "./testd";
import TitleDash from "Components/TitleDash";

function Tokenomic() {
  const { t } = useTranslation("common");

  return (
    <section className="token">
      <div className="container justify-content-center text-center">
        <TitleDash title={t("Tokenomics")} />

        <div className="row align-items-center">
          <div className="">
            {/* <LottieToken   /> */}
            <Test />
          </div>
        </div>
      </div>

      <DeelanceContract />
    </section>
  );
}

export default Tokenomic;
