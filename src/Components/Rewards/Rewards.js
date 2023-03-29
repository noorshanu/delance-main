import React from "react";
import "./Rewards.css";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import Logogo from "../../assets/main-logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { to } from "utils/RouterUtils";
import BaseButton from "Components/BaseButton";
import SocialLinks from "Components/SocialLinks";

function Rewards() {
  const { t } = useTranslation("common");

  return (
    <section className="reward">
      <div className="container">
        <div className="reward-head text-center">
          <div className="mt-4 mb-4">
            <SocialLinks className="justify-content-center" fontSize="90%" />
          </div>

          <div className="header-btn">
            <h2>{t("Win $100,000")}</h2>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="re-box1">
              <h1>
                {t(
                  "Enter a Drawing And You Could Be One of 4 Lucky Winners Sharing $100,000 Worth of $Dlance"
                )}
              </h1>
              <p>
                {t(
                  "To celebrate our presale launch and rapidly growing community, we’re giving four lucky people a chance to win a split of $100,000 worth of $Dlance."
                )}
              </p>
              <p>
                {t(
                  "To make multiple entries, follow the steps described in the scrollable box on this page. You must hold at least $100 of $Dlance at the time of the draw."
                )}
              </p>
              <p>{t("Good luck!")}</p>

              <p>{t("You can buy $Dlance by clicking the button below:")}</p>
              <div className="d-flex justify-content-center">
                <BaseButton as={Link} to={to("/")} variant={1}>
                  {t("BUY NOW")}
                </BaseButton>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="reward-box">
              <iframe
                src="https://gleam.io/Bpw26/deelance-100k-giveaway"
                frameBorder="0"
                allowfullscreen
                title="dee"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
