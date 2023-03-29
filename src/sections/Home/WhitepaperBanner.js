import React from "react";
import styles from "CSS/WhitepaperBanner.module.css";
import TitleDash from "Components/TitleDash";
import BaseButton from "Components/BaseButton";
import VerifiedCard from "Components/VerifiedCard";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import {
  LottieOptions_AnimationOptions,
  Lottie_femaleSoftwareAtWork,
  Lottie_girlAndBoy,
} from "Constants/LottieAnimations";

function WhitepaperBanner() {
  const { t } = useTranslation("common");

  return (
    <section className={styles.wrapper}>
      <main>
        <div className="container">
          {/* <TitleDash
            title="DeeLance Whitepaper"
            className="text-center mb-4"
            textClassName="mb-0"
          /> */}
          <div className={styles.sideBySide}>
            <div>
              <Lottie
                options={LottieOptions_AnimationOptions(Lottie_girlAndBoy)}
              />
            </div>

            <div>
              <div className="d-flex justify-content-center mb-5">
                <BaseButton
                  as="a"
                  href="https://docs.deelance.com/"
                  target="_blank"
                >
                  {t("Whitepaper")}
                </BaseButton>
              </div>

              <VerifiedCard />
            </div>

            <div>
              <Lottie
                options={LottieOptions_AnimationOptions(
                  Lottie_femaleSoftwareAtWork
                )}
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default WhitepaperBanner;
