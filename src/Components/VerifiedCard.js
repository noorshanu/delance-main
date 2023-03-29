import React from "react";
import { useTranslation } from "react-i18next";

function VerifiedCard() {
  const { t } = useTranslation("common");

  return (
    <div className="contract-verification-banner">
      <div className="audit-kyc">
        <p className="verification-banner-title font-inter text-white mb-0 text-center fs-16px">
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
  );
}

export default VerifiedCard;
