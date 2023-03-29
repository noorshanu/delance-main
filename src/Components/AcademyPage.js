import React from "react";
import { useTranslation } from "react-i18next";

function AcademyPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="academy">
        <div className="container">
          <p className="ad-p">Academy</p>
          <div className="academy-head">
            <h1>
              {t(
                "DeeLance is an ecosystem for both crypto natives as well as those who are entering the space for the first time. Here you will find the necessary tools and materials to get up to speed on the latest developments"
              )}
            </h1>
          </div>
          <div className="academy-btn">
            <a href="/" className="ad-btn-active">
              {t("All Courses")}
            </a>
            <a href="/" className="ad-btn">
              {t("NFT MarketPlace")}
            </a>

            <a href="/" className="ad-btn">
              {t("Press Releases")}
            </a>
            <a href="/" className="ad-btn">
              {t("General")}
            </a>
          </div>
          <div className="record">
            <p>{t("Coming soon...")}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AcademyPage;
