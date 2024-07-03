import React from 'react'
import gift_15 from '../../assets/gift_15.jpg'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:w-5/12 lg:w-7/12">
                      <img
                          src='https://www.technik-medien.at/wp_contents/uploads/2020/04/gift-1420830_1280.jpg'
                          alt="image" className='rounded-xl mx-auto mb-4'
                      />
                      <img src= {gift_15}  alt='' className='rounded-xl mx-auto mb-4'/>
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-brown-500 font-bold md:text-4xl">
                            Thinking inside the box to enrich relationships
                      </h2>
                      <p className="mt-6 text-brown-900">
                      Gifting is powerful gesture that leaves a lasting impression on individuals and plays a vital role
in fostering employee wellbeing. In the fast-pacedworld of business, where deadlines and targets often dominate, the act of giving and receiving
gifts serves as a meaningful reminder of appreciation and recognition. These tokens of
gratitude not only acknowledge the depth of relationship but also create a sense of belonging and camaraderie. They go beyond the workplace,
professional relationship and demonstrating that you value it on a personal level. Ultimately,
uniquely crafted corporate gifting is an investment in the over all well being of your workforce, nurturing a positive, motivated, and
engaged.
                        </p>
                      <p className="mt-6 text-blue"> 
                            We are passionate creative artist, whose love for art and human values grow in parallel.Our values are deep rooted in an inclusive environment, where in each of the team member is empowered and guided to make the right choice for the benefit of all, including mother nature.

                            We endeavor to model our business for social and environmental protection.
                            Our continuous effort is to bring out the best in every one, by unique collaboration between talented artisan and aspiring customer. We realize we must celebrate life every day by creating every day as a festival season for all connected.
                      </p>
                      <p className="mt-4 text-brown-900">
                      ParkhaVenture is created in 2024 with the thought of crafting premium luxury gifts for every occasion, big or small to express appreciation and make someone feel valued. Our hampers are thoughtfully curated and personalized to each individual, ensuring that each one is truly special.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    
  );
}