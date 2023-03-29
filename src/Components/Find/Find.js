import React from "react";
import "./Find.css";
import Lottie from "react-lottie";
import Meta from "./metav.json";
import { useTranslation } from "react-i18next";
import BaseButton from "Components/BaseButton";

function Find() {
  const { t } = useTranslation("common");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Meta,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="bg-dework">
      <div className="container py-5 py-md-3">
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-6">
            <div className="meta-1">
              <h1>
                {t("Find Freelancers in the")}{" "}
                <span className="green-light">{t("Metaverse")}</span>{" "}
              </h1>
              <p>
                {t(
                  "DeeLance brings employers and freelancers together for work and discussion in the virtual world of the Metaverse. "
                )}
              </p>
              <p>
                {" "}
                {t(
                  "Through the creation of innovative and unique digital worlds, commercial activities such as freelancer marketplaces will become even more efficient and useful."
                )}
              </p>
            </div>
            <div className="gp-2">
              <BaseButton
                variant={1}
                as="a"
                href="https://demo.corporate-metaverse.com/join"
                target="_blank"
                rel="noreferrer"
              >
                {t("buttons.demo", "DEMO")}
              </BaseButton>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center meta-img">
              {/* <img src="https://ik.imagekit.io/cforcrypto/Dework/merged.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672669567704" alt=""/> */}
              <Lottie
                options={defaultOptions}
                className="loti-1"
                width="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Find;
