import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gift_1 from "../../assets/blue_gift2.avif";
import gift_2 from "../../assets/yellow_gift1.avif";
import gift_3 from "../../assets/gift_0.jpeg";
import gift_4 from "../../assets/brown-gift_275559-4172.jpg";

const slides = [
  {
    image: gift_1,
    title: "Unwrap Joy, Spread Smiles",
  },
  {
    image: gift_4,
    title: "Celebrate Life's Precious Moments with our Gifts",
  },
  {
    image: gift_2,
    title: "Gratitude is Our Business Model",
  },
  {
    image: gift_3,
    title: "Elevate Your Brand with Every Present",
  },
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    
    <div className=" container bg-brown-300 overflow-hidden">
      <Slider {...settings} className='overflow-hidden'>
        {slides.map((slide, index) => (
          <div>
            <div
              key={index}
              className="flex flex-col md:flex-row items-center space-x-6"
            >
              <div className=" w-full md:w-1/2 h-auto rounded mt-0">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>

              <div className="w-full md:w-1/2 p-2">
                <h2 className="text-2xl font-bold text-center text-blue">
                  {slide.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
   
  );
};

export default SimpleSlider;
