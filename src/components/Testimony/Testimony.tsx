import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from '../../assets/artgroup.jpeg'
import img_2 from '../../assets/premiereng.jpeg'
import img_3 from '../../assets/livlong.png'

const testimonyCard = [
    {
        name:`Art Group of Industries`,
        img: img_1,
        review:`I just got my hands at the hamper and its
        gorgeous. The products look premium and the
        packaging is on brand, just what we had
        envisioned. Everyone who received the
        hamper loved it.`

    },
    {
        name:`PREMIER ENGINEERING`,
        img: img_2,
        review:`Thank you for making women's day
        celebrational memorable one for everyone in
        the office with the specially curated
        hampers. Everyone is loving the Michelle
        Obama book, a must read for everyone, I
        guess. Looking forward to working again in
        the future.`

    },
    {
        name:`LIVLONG`,
        img: img_3,
        review:`Wonderful unboxing experience!
        Excellent products from various
        categories like electronics, bottles,
        etc. Used their service for Corporate
        Gifting, truly one stop solution for
        all your gifting needs`

    },

]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

const Testimony = () => {
  return (
    
    <div className="w-full  m-auto bg-brown-400">
        <div className='mt-10'>
                <div> 
                    <h1 className='text-xl text-brown-900 font-semibold text-center'>What our Customers Says </h1>
                </div>
                <Slider {...settings}>
                    {
                testimonyCard.map((item,index) => (
                    
                        <div  key ={index} className='p-4'> 
                                
                                <div className="bg-white h-[400px] w-[250px] text-brown-600 rounded-xl">
                                    
                                    <div className='rounded-t-xl bg-white flex justify-center items-center'>
                                     <img className='mx-auto h-20 w-35' src ={item.img}  alt= ''/>
                                     </div>
                                        <div className="flex flex-col justify-center items-center gap-2 p-2">
                                         <h1 className='text-xl text-brown-900 font-semibold'>{item.name}</h1>
                                            <p className='text-sm text-justify text-brown-900 leading-tight overflow-hidden'>{item.review}</p>
                                            <button className=' bg-brown-700 text-brown-300 text-lg px-6 py-1 rounded-xl hover:bg-blue hover:text-white'>Read more</button>
                                        </div>
                                        
                                         
                                    </div>
                                </div> 
                
                           
                        
                   
                 
            ))}
            </Slider>
            </div>
            </div>
           
    
  )
}


export default Testimony