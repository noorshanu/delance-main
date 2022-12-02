import React from "react";
import "./NFTPopCat.css";
import { nftImg1 } from "../../assets/assets/images";
import { FaPaintBrush } from 'react-icons/fa';
import { HiMusicNote } from 'react-icons/hi';
import {ImEarth} from 'react-icons/im';
import {TbBrandMeta} from 'react-icons/tb';
import {GiCardExchange} from 'react-icons/gi';
import {CiCircleMore} from 'react-icons/ci';


function NFTPopCat() {
  return (
    <>
      <section className="pop-cat">
        <div className="container ">
          {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> */}
          <div className="pop-cat-head text-center ">
            <h1>
              Popular <span className="green">Categories</span>
            </h1>
          </div>
          <div className="pop-cat-nft-outerbox">
            <div className="justify-content-center align-items-center">
              <div className="pop-cat-grid-container ">

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <FaPaintBrush />                    
                  </div>
                  <div className="pop-cat-nft-text">
                      ART
                  </div>
                </div>

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <HiMusicNote />                    
                  </div>
                  <div className="pop-cat-nft-text">
                      MUSIC
                  </div>
                </div>

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <ImEarth />                    
                  </div>
                  <div className="pop-cat-nft-text">
                      DOMAIN NAMES
                  </div>
                </div> 

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <TbBrandMeta />                    
                  </div>
                  <div className="pop-cat-nft-text">
                      VIRTUAL WORLDS
                  </div>
                </div> 

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <GiCardExchange />                    
                  </div>
                  <div className="pop-cat-nft-text">
                      TRADING CARDS
                  </div>
                </div> 

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <CiCircleMore />                    
                  </div>
                  <div className="pop-cat-nft-text">
                      MORE
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

export default NFTPopCat;
