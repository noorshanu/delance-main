import React, { useEffect, useState } from "react";
import "./Hero.css";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Model from "Components/Popup/Model";
import Lottie from "react-lottie";
import Hero_lot from "./bg";
import PresaleMain from "Components/Presale/Presale_main";
import { useTranslation } from "react-i18next";
import UpperSection from "./UpperSection";
import LowerSection from "./LowerSection";
import { IoClose } from "react-icons/io5";
import BaseButton from "Components/BaseButton";
import SignUpButtonWithModal from "Components/SignUpButtonWithModal";
import PresaleVersion2 from "Components/PresaleVersion2";
import SocialLinks from "Components/SocialLinks";

function Hero() {
  const { t } = useTranslation("common");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hero_lot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="hero-home">
        <div className="container">
          {/* <UpperSection setIsModal={setIsModal} />
          <LowerSection /> */}

          <div
            className="row justify-content-center"
            style={{ position: "relative" }}
          >
            <div className="col-md-6">
              {/* <h1 className="hero-title white weight-600">
                A <span className="green-light"> {t("Web3 Space")} </span>
                Where the World{" "}
                <span className="green-light">{t("Work Together")}</span>{" "}
                Smartly
              </h1> */}

              <h1 className="hero-title white weight-700 lh-1_3 mb-4">
                <span className="green-light">Deelance</span> - A{" "}
                <span className="green-light">{t("Web3 Space")}</span>{" "}
                {t("Where the World Works Together Smartly.")}
              </h1>

              <p className="hero-sp-p">
                {t(
                  "DeeLance is a freelancing and Recruitment platform based on Web3. Its a decentralized platform revolutionizing how freelancers connect with potential employers"
                )}
              </p>
              <div className="hero-btn mt-4">
                {/* <BaseButton onClick={() => setIsModal(true)}>
                  {t("Sign Up")} <AiOutlineArrowRight />
                </BaseButton> */}

                <BaseButton
                  as="a"
                  href="https://docs.deelance.com/"
                  target="_blank"
                >
                  {t("Whitepaper")}
                </BaseButton>

                {/* <button className="hero-btn-2">{t("buttons.buy_now")}</button> */}
              </div>
              <div className="mt-5">
                {/* <PresaleMain /> */}
                <PresaleVersion2 />
              </div>
            </div>

            <div
              className="col-md-6 text-center align-items-center hero-gif-and-links"
              style={{ position: "relative" }}
            >
              <div className="second-img">
                <Lottie options={defaultOptions} className="loti-1" />
              </div>

              <div className="hero-links-and-verified-wrapper">
                <div className="contract-verification-banner">
                  <div className="audit-kyc">
                    <p className="verification-banner-title font-inter text-white mb-0">
                      {t("Audit and KYC | 100% Secured and Verified")}
                    </p>
                  </div>
                  <div className="audit-images">
                    <img src="images/logo1.png" alt="" />
                    <div
                      style={{
                        height: "20px",
                        border: "1px solid rgba(255,255,255,.3)",
                      }}
                    ></div>
                    <img src="images/coinsult-logo.svg" alt="" />
                  </div>
                </div>

                <div className="disclaimer">
                  <p className="white text-center">
                    {t(
                      "⚠️Beware of fraudulent and unauthorized websites, social media or email accounts claiming to represent Deelance. Deelance takes no responsibility for the misrepresentation and harm resulting from the wilful deception perpetrated by fraudulent third parties. Please exercise due caution at all times."
                    )}
                  </p>

                  <p className="white text-center">
                    {t("Only interact with verified Deelance accounts.")}
                  </p>
                </div>

                {/*  */}
                <SocialLinks className="justify-content-center" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="pop-up-sign"> */}
        {/* {isModal && <Model setIsModal={setIsModal} />} */}

        {/* </div> */}
      </section>
    </>
  );
}

export default Hero;
