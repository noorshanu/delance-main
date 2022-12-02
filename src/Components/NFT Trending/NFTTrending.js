import React from "react";
import "./NFTTrending.css";
import { nftImg1 } from "../../assets/assets/images";

function NFTTrending() {
  return (
    <>
      <section className="nft-trending">
        <div className="container ">
          {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> */}
          <div className="nft-trending-head text-center ">
            <h1>
              Trending <span className="green">NFTs</span>
            </h1>
          </div>
          <div className="trending-nft-outerbox">
            <div className="justify-content-center align-items-center test">
              <div className="trending-nft-grid-container ">

                <div className="trending-nft-box">                  
                  <div className="trending-nf-img-green "><img src={nftImg1} /></div>
                  <div className="trending-nft-text-wrap">
                      <div className="">Defraudment <div>0.09 ETH  1/14</div></div>
                      <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">                  
                  <div className="trending-nf-img-yellow "><img src={nftImg1} /></div>
                  <div className="trending-nft-text-wrap">
                      <div className="">Defraudment <div>0.09 ETH  1/14</div></div>
                      <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">                  
                  <div className="trending-nf-img-green "><img src={nftImg1} /></div>
                  <div className="trending-nft-text-wrap">
                      <div className="">Defraudment <div>0.09 ETH  1/14</div></div>
                      <div>91</div>
                  </div>
                </div>

                <div className="trending-nft-box">                  
                  <div className="trending-nf-img-yellow"><img src={nftImg1} /></div>
                  <div className="trending-nft-text-wrap">
                      <div className="">Defraudment <div>0.09 ETH  1/14</div></div>
                      <div>91</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nft-border-dashed-cover">{ Array.from({ length:20}).map((_, index) => {
            return(<span key={index} className ="nft-border-dashed"> </span>)
          })
        }</div>
        </div>
      </section>
    </>
  );
}

export default NFTTrending;
