import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-teal-900 font-bold md:text-4xl">
                            Thinking inside the box to enrich relationships
                      </h2>
                      <p className="mt-6 text-teal-600">
                            Our Story
                            We are a group of passionate creative artist, whose love for art and human values grow in parallel.Our values are deep rooted in an inclusive environment, where in each of the team member is empowered and guided to make the right choice for the benefit of all, including mother nature.

                            We endeavor to model our business for social and environmental protection.
                            Our continuous effort is to bring out the best in every one, by unique collaboration between talented artisan and aspiring customer. We realize we must celebrate life every day by creating every day as a festival season for all connected.
                      </p>
                      <p className="mt-4 text-teal-600">
                      Parkhaventure is created in 2024 with the thought of crafting premium luxury gifts for every occasion, big or small to express appreciation and make someone feel valued. Our hampers are thoughtfully curated and personalized to each individual, ensuring that each one is truly special.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}