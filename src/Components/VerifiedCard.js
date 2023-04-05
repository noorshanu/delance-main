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
        <a
          className="audit-img-wrapper"
          href="https://app.solidproof.io/projects/deelance?audit_id=326"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/logo1.png" alt="" />
        </a>
        <div
          style={{
            height: "20px",
            border: "1px solid rgba(255,255,255,.3)",
          }}
        ></div>
        <a
          className="audit-img-wrapper"
          href="https://coinsult.net/projects/deelance/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/coinsult-logo.svg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default VerifiedCard;
