import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
function MobFeauters() {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper mob-feat">
      <SwiperSlide>
        <div className='container'>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__2_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940367"
                  alt=""
                />
              </div>

              <h3>Business simplified</h3>
              <p>
                Post a job or apply for one in{" "}
                <span className="black">a minute.</span> No browser plugins, 3rd
                party apps, credit card details, or wallet-linking necessary.
                <span className="black">Fast, efficient & easy</span> the way
                blockchain is meant to be
              </p>
              <p> </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__1_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940347"
                  alt=""
                />
              </div>

              <h3>Tranceparency</h3>
              <p>
                By implementing an{" "}
                <span className="black">automated dispute system</span> and
                reputation stored on the blockchain. we’re building a{" "}
                <span className="black">trustworthy platform</span> all
                stakeholders can rely on.
              </p>
              <p></p>
            </div>
          </div>
      </div>
            
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
      
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__6_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940388"
                  alt=""
                />
              </div>

              <h3>Escrow</h3>
              <p>
                With escrow, Freelancers have the{" "}
                <span className="black">guarantee of payment</span> for their
                services, while the Employer’s funds are safe until the
                Freelancer produces the expected work. As it’s based on{" "}
                <span className="black">smart contracts</span> , escrow can’t be
                manipulated in any way, and makes trust.
              </p>
              <p> </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__5_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940219"
                  alt=""
                />
              </div>

              <h3>Ownership</h3>
              <p>
                With NFT (NFT) get ownership of the underlying{" "}
                <span className="black">asset</span> or piece of work.{" "}
                <span className="black"> NFTs can represent:</span> art, music,
                photographs, designs, web pages, animations, videos, royality or
                copyright of work etc.
              </p>
              <p></p>
            </div>
          </div>
        
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='container'>
        <div className="row justify-content-center align-items-center mtf-60">
     
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__4_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940348"
                  alt=""
                />
              </div>

              <h3>Low Fees</h3>
              <p>
                Our <span className="black">decentralized</span> and reputation
                stored on the blockchain. freelance market
                <span className="black">ecosystem</span> alowers fees by
                directly connecting Employers and Freelancers.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__3_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940367"
                  alt=""
                />
              </div>

              <h3>Fast Payments</h3>
              <p>
                You can use <span className="black">Crypto</span> get paid for
                your services quickly and avoid currency{" "}
                <span className="black">exchange</span> and possible commission
                rates{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
      </SwiperSlide>
    
      
    </Swiper>
  </>
  )
}

export default MobFeauters