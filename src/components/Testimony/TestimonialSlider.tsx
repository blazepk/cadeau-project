import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from "../../assets/artgroup.jpeg";
import img_2 from "../../assets/premiereng.jpeg";
import img_3 from "../../assets/livlong.png";


const testimonyCard = [
  {
    id:1,
    name: `Art Group of Industries`,
    img: img_1,
    review: `I just got my hands at the hamper and its
        gorgeous. The products look premium and the
        packaging is on brand, just what we had
        envisioned. Everyone who received the
        hamper loved it.`,
  },
  {
    id:2,
    name: `PREMIER ENGINEERING`,
    img: img_2,
    review: `Thank you for making women's day
        celebration memorable one for everyone in
        the office with the specially curated
        hampers.Looking forward to working again in
        the future.Really Like the Concept.`,
  },
  {
    id:3,
    name: `LIVLONG`,
    img: img_3,
    review: `Wonderful unboxing experience!
        Excellent products from various
        categories like electronics, bottles,
        etc. Used their service for Corporate
        Gifting, truly one stop solution for
        all your gifting needs.`,
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
    <div className='container  m-auto'>
      <p className='text-brown-900 font-bold text-2xl text-center justify-center'>What Our Customers Says</p>
      <div className=' mt-20'>
       
      <Slider {...settings}>
        {testimonyCard.map((testimonial, index) => (
          <div key={index} className="bg-white h-[350px] text-brown-900 rounded-xl">
            <div className="bg-white h-16 rounded-t-xl flex justify-center items-center mt-2">
              <img className="w-22 h-24 rounded-l p-2 "
                src={testimonial.img}
                alt=''
              />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className="text-l font-semibold">{testimonial.name}</p>
                
                <p className='text-brown-900'>
                {testimonial.review}
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
