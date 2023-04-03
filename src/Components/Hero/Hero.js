import React, { useEffect, useState } from "react";
import "./Hero.css";

import { AiOutlineArrowRight } from "react-icons/ai";
import Lottie from "react-lottie";
import Hero_lot from "./bg";
import { useTranslation } from "react-i18next";
import UpperSection from "./UpperSection";
import LowerSection from "./LowerSection";
import { IoClose } from "react-icons/io5";
import BaseButton from "Components/BaseButton";
import SignUpButtonWithModal from "Components/SignUpButtonWithModal";
import PresaleVersion2 from "Components/PresaleVersion2";
import SocialLinks from "Components/SocialLinks";
import { useAccount } from "wagmi";
import { scroller } from "react-scroll";

function Hero() {
  const { t } = useTranslation("common");
  const { address } = useAccount();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hero_lot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // console.log("re-rednering parent");

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
                <span className="green-light">DeeLance</span> - A{" "}
                <span className="green-light">{t("Web3 Space")}</span>{" "}
                {t("Where the World Works Together Smartly.")}
              </h1>

              <p className="hero-sp-p mb-0">
                {t(
                  "DeeLance is a freelancing and recruitment platform based on Web3. It's a decentralized platform revolutionizing how freelancers connect with potential employers."
                )}
              </p>
              <div className="mt-4 mt-md-5" id="presale-atm">
                {/* <PresaleMain /> */}
                <PresaleVersion2 />
              </div>
            </div>

            <div
              className="col-md-6 hero-gif-and-links"
              style={{ position: "relative" }}
            >
              <div className="second-img">
                <Lottie options={defaultOptions} className="loti-1" />
              </div>

              <div className="hero-links-and-verified-wrapper">
                <div className="disclaimer">
                  <p className="white text-center">
                    {t(
                      "⚠️Beware of fraudulent and unauthorized websites, social media, or email accounts claiming to represent DeeLance. DeeLance takes no responsibility for the misrepresentation and harm resulting from the willful deception perpetrated by fraudulent third parties. Please exercise due caution at all times."
                    )}
                  </p>

                  <p className="white text-center">
                    {t("Only interact with verified DeeLance accounts.")}
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
