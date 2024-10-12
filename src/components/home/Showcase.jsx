import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import project1 from "../../assets/img/169hose.png";
import project2 from "../../assets/img/adirek.png";


function Showcase() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-xl text-center mt-40 mb-10 uppercase font-bold	">
          showcase
        </h2>

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
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper object-cover	"
        >
          <SwiperSlide>
            <img src={project1} />
            
          </SwiperSlide>
          <SwiperSlide>
            <img src={project2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Showcase;
