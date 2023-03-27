import React from "react";
import "./NFTTrending.css";
import Nft1 from "../../assets/nft/nft.png";
import Nft2 from "../../assets/nft/nft2.png";
import Nft3 from "../../assets/nft/nft3.png";
import Nft4 from "../../assets/nft/nft4.png";
import { useTranslation } from "react-i18next";

function NFTTrending() {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="nft-trending">
        <div className="container ">
          <div className="nft-trending-head text-center ">
            <h1>
              {t("Trending")} <span className="green">{t("NFTs")}</span>
            </h1>
          </div>
          <div className="trending-nft-outerbox">
            <div className="justify-content-center align-items-center test">
              <div className="trending-nft-grid-container ">
                <div className="trending-nft-box">
                  <div className="trending-nf-img-green ">
                    <img src={Nft1} alt="" />
                  </div>
                  <div className="trending-nft-text-wrap">
                    <div className="">
                      {t("Defraudment")} <div>0.09 ETH 1/14</div>
                    </div>
                    <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">
                  <div className="trending-nf-img-yellow ">
                    <img src={Nft2} alt="" />
                  </div>
                  <div className="trending-nft-text-wrap">
                    <div className="">
                      {t("Defraudment")} <div>0.09 ETH 1/14</div>
                    </div>
                    <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">
                  <div className="trending-nf-img-green ">
                    <img src={Nft3} alt="" />
                  </div>
                  <div className="trending-nft-text-wrap">
                    <div className="">
                      {t("Defraudment")} <div>0.09 ETH 1/14</div>
                    </div>
                    <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">
                  <div className="trending-nf-img-yellow">
                    <img src={Nft4} alt="" />
                  </div>
                  <div className="trending-nft-text-wrap">
                    <div className="">
                      {t("Defraudment")} <div>0.09 ETH 1/14</div>
                    </div>
                    <div>91</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nft-border-dashed-cover">
            {Array.from({ length: 20 }).map((_, index) => {
              return (
                <span key={index} className="nft-border-dashed">
                  {" "}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default NFTTrending;
