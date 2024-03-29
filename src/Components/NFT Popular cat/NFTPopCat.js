import React from "react";
import "./NFTPopCat.css";
import Art from "../../assets/nft/art.png";
import Music from "../../assets/nft/music.png";
import Web from "../../assets/nft/web.png";
import Card from "../../assets/nft/card.png";
import Domain from "../../assets/nft/domain.png";
import More from "../../assets/nft/more.png";
import Dot from "../../assets/dot.png";
import { useTranslation } from "react-i18next";

function NFTPopCat() {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="pop-cat">
        <div className="container ">
          <img src={Dot} alt="" className="border-green" />

          <div className="pop-cat-head text-center ">
            <h1>
              {t("Popular")} <span className="green">{t("Categories")}</span>
            </h1>
          </div>
          <div className="pop-cat-nft-outerbox">
            <div className="justify-content-center align-items-center">
              <div className="pop-cat-grid-container ">
                <div className="pop-cat-nft-box">
                  <div className="pop-cat-nft-img ">
                    <img src={Art} alt="" className="music" />
                  </div>
                  <div className="pop-cat-nft-text">{t("ART")}</div>
                </div>

                <div className="pop-cat-nft-box">
                  <div className="pop-cat-nft-img ">
                    <img src={Music} alt="domain" className="domain" />
                  </div>
                  <div className="pop-cat-nft-text">{t("MUSIC")}</div>
                </div>

                <div className="pop-cat-nft-box">
                  <div className="pop-cat-nft-img ">
                    <img src={Domain} alt="" className="art" />
                  </div>
                  <div className="pop-cat-nft-text">{t("DOMAIN NAMES")}</div>
                </div>

                <div className="pop-cat-nft-box">
                  <div className="pop-cat-nft-img ">
                    <img src={Web} alt="" />
                  </div>
                  <div className="pop-cat-nft-text">{t("VIRTUAL WORLDS")}</div>
                </div>

                <div className="pop-cat-nft-box">
                  <div className="pop-cat-nft-img ">
                    <img src={Card} alt="" className="trend" />
                  </div>
                  <div className="pop-cat-nft-text">{t("TRADING CARDS")}</div>
                </div>

                <div className="pop-cat-nft-box">
                  <div className="pop-cat-nft-img ">
                    <img src={More} alt="" className="more" />
                  </div>
                  <div className="pop-cat-nft-text">{t("MORE")}</div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://ik.imagekit.io/cforcrypto/Dework/Vector_6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059241889"
            alt=""
            className="border-green-2"
          />
        </div>
      </section>
    </>
  );
}

export default NFTPopCat;
