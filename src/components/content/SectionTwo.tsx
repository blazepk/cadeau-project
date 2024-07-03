
import Card from "../common/Card";
import img_1 from "../../assets/offerings/gift_1.jpg"
import img_2 from "../../assets/offerings/gift_2.jpg"
import img_3 from "../../assets/offerings/gift_3.jpg"
import img_4 from "../../assets/offerings/gift_4.jpg"
import img_5 from "../../assets/offerings/gift_5.jpg"
import img_6 from "../../assets/offerings/gift_6.jpg"
import img_7 from "../../assets/offerings/gift_7.jpg"
import img_8 from "../../assets/offerings/gift_8.jpg"
import img_9 from "../../assets/offerings/gift_9.jpg"
import img_10 from "../../assets/offerings/gift_1.jpg"

const cards = [
  {
   
    imgSrc: img_1,
    
  },
  {
    
    imgSrc: img_2,
    
    
  },
  {
    
    imgSrc: img_3,
    
    
  },
  {
    
    imgSrc: img_4,
    
    
  },
  {
    
    imgSrc: img_5,
    content: "Mugs",
    
  },
  {
    
    imgSrc: img_6,
    
    
  },
  {
    
    imgSrc: img_6,
    
    
  },
  {
    
    imgSrc: img_7,
    
    
  },
  {
    
    imgSrc: img_8,
    
    
  },
  {
   
    imgSrc: img_9,
    
    
  },
  {
    
    imgSrc: img_10,
    
    
  },
];

function SectionTwo() {
  return (
    <div className=" bg-brown-300 my-3">
      <h5 className="text-4xl text-brown-900 py-2 text-center">
        Our Offerings
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-y-4 gap-x-4 px-4 ">
        {cards.map((card,index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            
          />
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;
