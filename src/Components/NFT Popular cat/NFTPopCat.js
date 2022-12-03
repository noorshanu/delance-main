import React from "react";
import "./NFTPopCat.css";

import {ImEarth} from 'react-icons/im';
import {TbBrandMeta} from 'react-icons/tb';
import {GiCardExchange} from 'react-icons/gi';
import {CiCircleMore} from 'react-icons/ci';


function NFTPopCat() {
  return (
    <>
      <section className="pop-cat">
     
        <div className="container ">
        <img src="https://ik.imagekit.io/cforcrypto/Dework/Vector_6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059241889" alt="" className="border-green"/>
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
                   <img src="https://ik.imagekit.io/cforcrypto/Dework/nft_market/Vector-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984853" alt="" className="art"/>                   
                  </div>
                  <div className="pop-cat-nft-text">
                      ART
                  </div>
                </div>

                <div className="pop-cat-nft-box">                  
                  <div className="pop-cat-nft-img ">
                    <img src="https://ik.imagekit.io/cforcrypto/Dework/nft_market/Vector.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059984662" alt="" className="music"/>                   
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
       
         <img src="https://ik.imagekit.io/cforcrypto/Dework/Vector_6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670059241889" alt="" className="border-green-2"/>
        </div>
      </section>
    </>
  );
}

export default NFTPopCat;
