// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  {
    src: "6CfTRMk3MN0",
    id: 1,
    alt: "image-1",
  },
  {
    src: "id46coi1X2I",
    id: 2,
    alt: "image-2",
  },
  {
    src: "ja_GtYepi88",
    id: 3,
    alt: "image-3",
  },
  {
    src: "fuZWqL1C2rM",
    id: 4,
    alt: "image-4",
  },
  {
    src: "3hvpymDO7ZI",
    id: 5,
    alt: "image-5",
  },
  {
    src: "Tqm4Ius4TyA",
    id: 6,
    alt: "image-6",
  },
];

const SwiperComponent = () => {
  return (
    <Swiper
      className="bg-yellow-100 relative"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      centeredSlides={true}
      //   breakpoints={{
      //     // when window width is >= 320px
      //     320: {
      //       slidesPerView: 1,
      //       spaceBetween: 0,
      //     },
      //     // when window width is >= 480px
      //     480: {
      //       slidesPerView: 2,
      //       spaceBetween: 0,
      //     },
      //     // when window width is >= 768px
      //     768: {
      //       slidesPerView: 1,
      //       spaceBetween: 0,
      //     },
      //   }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images.map((item) => (
        <SwiperSlide key={item.id} className="max-h-[700px]">
          <div className="swiper-image-container">
            <img
              className="swiper-image"
              src={`https://source.unsplash.com/${item.src}`}
              alt={item.alt}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
