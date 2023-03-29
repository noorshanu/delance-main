import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import { Pagination, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import FeatureCard from "Components/FeatureCard";

function MobFeauters({ data }) {
  const { t } = useTranslation("common");

  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mob-feat"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="container">
              <FeatureCard item={item} />
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="container">
            <FeatureCard item={data[2]} />
            <FeatureCard item={data[3]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <FeatureCard item={data[4]} />
            <FeatureCard item={data[5]} />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default MobFeauters;
