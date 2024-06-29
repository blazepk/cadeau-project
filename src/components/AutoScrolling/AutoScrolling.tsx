import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/livlong.png'
import img2 from '../../assets/img2.jpg'
import img4 from '../../assets/img3.png'
import img3 from '../../assets/img4.jpg'

function AutoScrolling() {

    const logos = [
        img1,
        img2,
        img3,
        img4
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:4 ,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    
    <div className='mx-auto bg-white flex flex-col justify-center items-center max-w-full h-1/2  overflow-hidden'>
        <h1 className='text center text-xl font-bold my-3'> Our Trusted Customers</h1>
        <div className='slide-container w-full'>
           
            <Slider {...settings}>
                {
                    logos.map((item,index) => (
                        
                        <div id ='sl' key ={index} className='flex items-center p-8 w-48 h-40 mx-auto rounded-xl  space-x-2 overflow-hidden'>
                            
                                <img src = {item} className='w-2/3 h-2/3' />
                            
                        
                        </div>
                        
                   ))}
                </Slider>
            
        </div>
    </div>
    
    
  )
}

export default AutoScrolling

