// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const OrderOnlineCarousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={24}
      freeMode={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative">
          <img src={slide1} />
          <p className="text-white text-xl md:text-3xl absolute bottom-4 inset-x-0 mx-auto">
            Salads
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={slide2} />
          <p className="text-white text-xl md:text-3xl absolute bottom-4 inset-x-0 mx-auto">
            Soups
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={slide3} />
          <p className="text-white text-xl md:text-3xl absolute bottom-4 inset-x-0 mx-auto">
            pizzas
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={slide4} />
          <p className="text-white text-xl md:text-3xl absolute bottom-4 inset-x-0 mx-auto">
            desserts
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={slide5} />
          <p className="text-white text-xl md:text-3xl absolute bottom-4 inset-x-0 mx-auto">
            Salads
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderOnlineCarousel;
