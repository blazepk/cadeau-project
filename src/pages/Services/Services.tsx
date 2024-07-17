import happy from '../../assets/happy.jpeg'
import commitment from '../../assets/commitment.jpeg'
import selection from '../../assets/selection.jpg'
import gift_5 from '../../assets/gift_5.jpg'

const serviceCardDetails = [
  {
    id: 1,
    title: "Exquisite Presentation",
    description: `Our gifts aren't just products, they are elegantly packaged to leave
            a lasting impression, show-casing your attention to detail and
            appreciation for the recipient`,
  },
  {
    id: 2,
    title: "Unmatched Customer Support",
    description: `Our responsive customer support team is always at your service
                ensuring a smooth and stress-free gifting experience`,
  },
  {
    id: 3,
    title: "Sustainability Commitment",
    description: `We're dedicated to eco-conscious gifting. Our catalog features a
                range of eco - friendly products , aligning your brandwith
                sustainability goals`,
  },
  {
    id: 4,
    title: "Cost-Efficiency Beyond MRP",
    description: `We prioritize affordability.Our exclusive partnerships enable us
                to offer you corporate gifts at prices lower than their MRP,
                ensuring exceptional value for your investment`,
  },
  {
    id: 5,
    title: "Effortless Corporate Gifting",
    description: `Simplify your gifting process with our themed gift sets and
                expert curation, making it effortless for you to select the
                perfect gifts for your clients, employees, and partners.`,
  },
  {
    id: 6,
    title: "Diverse Curated Selection",
    description: `We excel in meticulously curating top-tie brands across a wide
                spectrum of categories ensuring that our corporate gifts are a
                fusion of innovation, quality, and purpose`,
  },
];

interface IServiceData {
  id: number;
  title: string;
  description: string;
}

function ServiceCard({ title, description }: IServiceData) {
  return (
    
    <div className="min-h-[100px] rounded  bg-brown-400 w-full shadow-xl p-4  col-span-2">
      <div className="p-4 text-center flex justify-around h-full">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-l text-blue font-bold md:text-xl">{title}</h2>
          <p className="mt-6 text-brown-900">{description}</p>
        </div>
      </div>
    </div>
    
  );
}

function Services() {
  return (
    <>
      {/*<div className="grid grid-cols-12 gap-x-4 gap-y-5 p-6 bg-white">*/}
      <div className='flex flex-col md:flex-row'>
        <div className=' w-full flex flex-col flex-wrap gap-x-4 gap-y-5 p-6  justify-between'>
        {serviceCardDetails.map((item: IServiceData) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            description={item.description}
            id={item.id}
          />
        ))}
        </div>
        <div className=' flex flex-col justify-start font-extrabold gap-x-4 gap-y-4 p-6'>
          <h1 className='text-blue '>Browse our selection of corporate gifts today and make your next gifting experience a memorable one!</h1>
          <div>
          <img src={happy} 
          alt='' className='rounded-xl  w-full mx-auto mb-4'/>
          <img src={commitment} 
          alt=''className='rounded-xl w-full mx-auto mb-4'/>
          <img src={selection} 
          alt=''className='rounded-xl mx-auto mb-4'/>
          <img src={gift_5} 
          alt=''className='rounded-xl mx-auto mb-4'/>
        </div>
        </div>
        </div>
    </>
  );
}

export default Services;
