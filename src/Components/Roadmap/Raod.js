import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Road.css'
import "swiper/css/navigation";
import { Navigation } from "swiper";

import {FaCheck} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'

// import required modules
import { Autoplay,EffectCoverflow, Pagination } from "swiper";

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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Navigation,Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="road-box">
          <div className="road-top">
              <h2>Q4 2022 </h2>
              <p>( Nov-Dec )</p>
            </div>
            <div className="road-list">
            <p><FaCheck className=""/> Initial Project Plan </p>
              <p><FaCheck /> website Design  </p>
              <p><FaCheck/> Website Live </p>
              <p><FaCheck/> Initial Smart-contracts Deployment  </p>
              
             
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
            <p><GoPrimitiveDot/> Private Sale  </p>
              <p><GoPrimitiveDot/> Project Launch  </p>
              <p><GoPrimitiveDot/> Metaverse Demo   </p>
              <p><GoPrimitiveDot/> CMC and CG Listing   </p>

             
              
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
            <p><GoPrimitiveDot /> NFT Launch  </p>
              <p><GoPrimitiveDot/> NFT MarketPlace </p>
              <p><GoPrimitiveDot/> Freelance Platform Launch </p>
              <p><GoPrimitiveDot className=""/> Exchanges Listing  </p>
              <p><GoPrimitiveDot/> Metaverse Development    </p>

     
            
            </div>
      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="road-box">
        <div className="road-top">
              <h2>Q3 2023</h2>
              <p>( July -Sept )   </p>
            </div>
            <div className="road-list">
            

              <p><GoPrimitiveDot /> App development   </p>
              <p><GoPrimitiveDot/> Metaverse Integration to Main Platform </p>
              <p><GoPrimitiveDot/> Further Development   </p>
            
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
