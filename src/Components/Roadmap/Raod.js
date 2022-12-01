import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Road.css'
import "swiper/css/navigation";
import { Navigation } from "swiper";

import {FaCheck} from 'react-icons/fa'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Raod() {
  return (
    <>
    <section className="roadmap">
        <div className="container">
            <div className="road-head">
                <h1>ROADMAP</h1>
                
            </div>
            <div className="road-slide">
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="road-box">
          <div className="road-top">
              <h2>Q4 2022 </h2>
              <p>( Nov-Dec )</p>
            </div>
            <div className="road-list">
              <p><FaCheck className="green"/>website Design  </p>
              <p><FaCheck/>Website Live </p>
              <p><FaCheck/>Initial Smart-contracts Deployment  </p>
              <p><FaCheck className=""/>Initial Project Plan </p>
              <p><FaCheck/>Private Sale  </p>
              <p><FaCheck/>Project Launch  </p>
              <p><FaCheck/>Metaverse Demo   </p>
              <p><FaCheck/>CMC and CG Listing   </p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="road-box">
            <div className="road-top">
              <h2>Q2 2023</h2>
              <p>( April -June )   </p>
            </div>
            <div className="road-list">
              <p><FaCheck className="green"/>App development   </p>
              <p><FaCheck/>Metaverse Integration to Main Platform </p>
              <p><FaCheck/>Further Development   </p>
            
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="road-box">
         
            <div className="road-top">
              <h2>Q1 2023 </h2>
              <p> ( Jan - March )</p>
            </div>
            <div className="road-list">
              <p><FaCheck className="green"/>NFT Launch  </p>
              <p><FaCheck/>NFT MarketPlace </p>
              <p><FaCheck/>Freelance Platform Launch </p>
              <p><FaCheck className=""/>Exchanges Listing  </p>
              <p><FaCheck/>Metaverse Development    </p>
              
            </div>
          </div>
        </SwiperSlide>
   
   
  
      </Swiper>

            </div>
        </div>
        
    </section>
    
    </>
  )
}
