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
          slideShadows: true,
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
            <ul className="road-list">
              <li><FaCheck className=""/>Initial Project Plan </li>
              <li><FaCheck className="green"/>website Design  </li>
              <li><FaCheck/>Website Live </li>
              <li><FaCheck/>Initial Smart-contracts Deployment  </li>
              <li><FaCheck/>Private Sale  </li>
              <li><FaCheck/>Project Launch  </li>
              <li><FaCheck/>Metaverse Demo   </li>
              <li><FaCheck/>CMC and CG Listing   </li>
            </ul>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="road-box">
            <div className="road-top">
              <h2>Q4 2022 </h2>
              <p>( Nov-Dec )</p>
            </div>
            <ul className="road-list">
              <li><FaCheck className=""/>Initial Project Plan </li>
              <li><FaCheck className="green"/>website Design  </li>
              <li><FaCheck/>Website Live </li>
              <li><FaCheck/>Initial Smart-contracts Deployment  </li>
              <li><FaCheck/>Private Sale  </li>
              <li><FaCheck/>Project Launch  </li>
              <li><FaCheck/>Metaverse Demo   </li>
              <li><FaCheck/>CMC and CG Listing   </li>
            </ul>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="road-box">
            <div className="road-top">
              <h2>Q4 2022 </h2>
              <p>( Nov-Dec )</p>
            </div>
            <ul className="road-list">
              <li><FaCheck className=""/>Initial Project Plan </li>
              <li><FaCheck className="green"/>website Design  </li>
              <li><FaCheck/>Website Live </li>
              <li><FaCheck/>Initial Smart-contracts Deployment  </li>
              <li><FaCheck/>Private Sale  </li>
              <li><FaCheck/>Project Launch  </li>
              <li><FaCheck/>Metaverse Demo   </li>
              <li><FaCheck/>CMC and CG Listing   </li>
            </ul>

          </div>
        </SwiperSlide>
   
   
  
      </Swiper>

            </div>
        </div>
        
    </section>
    
    </>
  )
}
