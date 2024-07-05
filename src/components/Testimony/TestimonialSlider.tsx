import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from "../../assets/artgroup.jpeg";
import img_2 from "../../assets/premiereng.jpeg";
import img_3 from "../../assets/livlong.png";

const testimonyCard = [
  {
    name: `Art Group of Industries`,
    img: img_1,
    review: `I just got my hands at the hamper and its
        gorgeous. The products look premium and the
        packaging is on brand, just what we had
        envisioned. Everyone who received the
        hamper loved it.`,
  },
  {
    name: `PREMIER ENGINEERING`,
    img: img_2,
    review: `Thank you for making women's day
        celebrational memorable one for everyone in
        the office with the specially curated
        hampers. Everyone is loving the Michelle
        Obama book, a must read for everyone, I
        guess. Looking forward to working again in
        the future.`,
  },
  {
    name: `LIVLONG`,
    img: img_3,
    review: `Wonderful unboxing experience!
        Excellent products from various
        categories like electronics, bottles,
        etc. Used their service for Corporate
        Gifting, truly one stop solution for
        all your gifting needs`,
  },
];
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center justify-center">
      <div className="bg-brown-300 mt-10 p-0 text-brown-900">
        <h1 className="text-3xl font-bold">What our Customers Says</h1>
      </div>
      <div className="w-full justify-center px-16 py-6">
        <Slider {...settings}>
          {testimonyCard.map((testimonial, index) => (
            <div key={index} className="text-center p-0">
              <div className="bg-white h-[350px] w-[250px] text-brown-600 rounded-xl">
                <img
                  src={testimonial.img}
                  alt=""
                  className="w-22 h-20 rounded-xl mx-auto mb-4"
                />

                <p className="mt-2 text-brown-900 font-bold">
                  {" "}
                  {testimonial.name}
                </p>
                <p className="text-sm font-normal text-brown-900 text-justify px-2">
                  &quot;{testimonial.review}&quot;
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
