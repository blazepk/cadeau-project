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
    <div className="mx-auto bg-white flex flex-col justify-center items-center max-w-full h-1/4  overflow-hidden">
      <h1 className="text center text-xl font-bold my-1">
        {" "}
        Our Trusted Customers
      </h1>

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {logos.map((item, index) => (
            <div key={index} className="p-4">
              <img src={item} className="w-2/3 h-2/3 mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoScrolling;
