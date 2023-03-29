import React from "react";
import "./Nft.css";
import NftBg from "../../assets/nft/nft-bg.png";
import { useTranslation } from "react-i18next";

function NFT() {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="hero-nft">
        <div className="">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 ">
                <h1>
                  {t("Explore, Collect,")}
                  <br /> {t("And Sell")} <div className="green">NFTs</div>
                </h1>
                <h6>
                  {t(
                    "Welcome to the future. Buy and sell awesome artworks on the world’s best digital marketplace for non-fungible tokens."
                  )}
                </h6>
                <div className="nft-hero-btn">
                  <a href="/" className="nft-hero-btn-1">
                    {t("Coming Soon..")}
                  </a>
                  {/* <a href="/" className='nft-hero-btn-2'>Coming Soon..</a> */}
                </div>
              </div>
              <div className="col-md-6 text-end align-items-center">
                <img className="hero-img" src={NftBg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NFT;
