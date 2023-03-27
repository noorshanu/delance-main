import React from "react";
import { useTranslation } from "react-i18next";

function FeatureCard({ item }) {
  const { t } = useTranslation("common");

  return (
    <div className="feat-box">
      <div className="feat-box-header">
        <div className="feat-img">
          <img src={item.img} alt="" />
        </div>

        <h3 className="green-light mb-0">{t(item.title)}</h3>
      </div>
      <p className="mb-0 lh-1_7 fs-14px">{t(item.desc)}</p>
    </div>
  );
}

export default FeatureCard;
