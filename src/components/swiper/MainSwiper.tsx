// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//
import gift_1 from '../../assets/blue_gift2.avif'
import gift_2 from '../../assets/yellow_gift1.avif'
import gift_3 from '../../assets/ribbon_brown.avif'
import gift_4 from '../../assets/brown-gift_275559-4172.jpg'
import gift_7 from '../../assets/gift_12.avif'
import gift_8 from '../../assets/gift_13.avif'

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
    src: gift_1,
    id: 1,
    alt: "image-1",
    review:'Handmade Products at your Door'
  },
  {
    src: gift_2,
    id: 2,
    alt: "image-2",
    review:'Versatility for Every Occasion'
  },
  {
    src: gift_3,
    id: 3,
    alt: "image-3",
    review:'Versatility for Every Occasion'
  },
  {
    src: gift_4,
    id: 4,
    alt: "image-4",
  },
  {
    src:gift_7,
    id: 5,
    alt: "image-5",
  },
  {
    src: gift_8,
    id: 6,
    alt: "image-6",
  },
];

const SwiperComponent = () => {
  return (
    <Swiper
      className=" bg-spot-pink  relative"
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
      {images.map((item,index) => (
        <div>
        <SwiperSlide>
        <div key={index} className=" container relative sm:min-ph-[25vh] sm:h-[45vh] sm:max-h-[50vh] bg-cover bg-right">
          
          <div className=' py-8 sm:py-0 sm:flex justify-between items-center w-full h-full'>
            
            <div className="swiper-image-container w-full h-full">
              <div className='flex items-center h-full'>

             
                <img
              className="swiper-image flex items-center w-full h-full"
              src={item.src}
              alt={item.alt}
                />
              </div>
            </div>
             
              
           
          </div>
         </div> 
        </SwiperSlide>
        </div>
      ))}

    </Swiper>
  );
};

export default SwiperComponent;
