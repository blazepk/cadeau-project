import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/livlong.png";
import img2 from "../../assets/kalpataru.png";
import img4 from "../../assets/img3.png";
import img3 from "../../assets/img4.jpg";
import img5 from "../../assets/gloster.png";
function AutoScrolling() {
  const logos = [img1, img2, img3, img4, img5];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>

      
        <Slider {...settings} className='overflow-hidden '>
          {logos.map((item, index) => (
            <div key={index} className="p-4">
              <img src={item} alt={`Company logo ${index + 1}`} className="mx-auto h-16" />
            </div>
          ))}
        </Slider>
      </div>
    
  );
}

export default AutoScrolling;
