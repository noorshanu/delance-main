import React from "react";
import { useTranslation } from "react-i18next";
import BaseButton from "./BaseButton";
import TitleDash from "./TitleDash";
import styles from "CSS/NewToCrypto.module.css";
import { Link } from "react-router-dom";
import { to } from "utils/RouterUtils";
import Lottie from "react-lottie";
import {
  LottieOptions_AnimationOptions,
  Lottie_businessStartup,
} from "Constants/LottieAnimations";

function NewToCrypto() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="faq-grid" style={{ alignItems: "center" }}>
          <div>
            <TitleDash title={t("New To Crypto?")} className="mb-4" />

            <p
              className="white mb-4 fs-18px weight-500 lh-1_6"
              style={{ "--decrement-lg": "6px" }}
            >
              {t(
                "Want to purchase $DLANCE and join the future of Freelancing but not sure where to start? Fill in our form and one of our team members will guide you through the process."
              )}
            </p>

            <BaseButton as={Link} to={to("/new-to-crypto")}>
              {t("Contact Us")}
            </BaseButton>
          </div>

          <div>
            <Lottie
              options={LottieOptions_AnimationOptions(Lottie_businessStartup)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewToCrypto;
