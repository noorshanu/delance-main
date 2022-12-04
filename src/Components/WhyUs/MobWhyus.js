import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
function MobWhyus() {
  return (
    <>
    <div className="container-fluid mob-why-swiper ">
        <div className="why-us-head text-center">
          <h1>Why Deelance</h1>
        </div>
    <div className='why-us-box'>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='row justify-content-center align-items-center'>
            <div className="col-md-3 col-6">
              <div className="content">
                <div className="border-down">
                  <p>Client Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Freelancer Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Withdrawal Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Decentralized</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Content Ownership</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Efficient Escrow</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>No Limit on task size</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>scalable dispute system</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>NFT / Metaverse</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Staff Recruitment</p>
                  <hr />
                </div>
                
              </div>
            </div>



            <div className="col-md-2 col-6">
              <div className="content-2 text-center">
                <div className="why-content-img-head">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/features/white_v-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669879313608"
                    alt=""
                  />
                </div>
                <div className="">
                  <p>2%</p>
                  <hr />
                </div>
                <div className="">
                  <p>10%</p>
                  <hr />
                </div>
                <div className="">
                  <p>Crypto/Instant</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
              </div>
            </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row justify-content-center align-items-center'>
        <div className="col-md-2 col-6">
              <div className="content-3 text-center">
                <div className="why-content-img-head">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/image_8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669366389254"
                    alt=""
                  />
                </div>
                <div className="">
                  <p>3%</p>
                  <hr />
                </div>
                <div className="">
                  <p>10%</p>
                  <hr />
                </div>
                <div className="short-dis">
                  <p>Min payout $100</p>
                  <p>(2.75% fee for withdrawal for currency conversion)</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No/partial</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="content-3 text-center">
                <div className="why-content-img-head">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/image_9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669366389048"
                    alt=""
                  />
                </div>
                <div className="up-work">
                  <p style={{marginBottom:'0px'}}>3.5%</p>
                  {/* <p className="each">(Each milestone)</p> */}
                  <hr />
                </div>
                <div className="">
                  <p>20%</p>
                  <hr />
                </div>
                <div className="short-dis">
                  <p>Min payout $100</p>
                  <p>(5% fee for withdrawal for currency conversion)</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No/partial</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
              </div>
            </div>
            </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default MobWhyus