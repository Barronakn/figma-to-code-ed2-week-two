import React from "react";
import arrow from "../../assets/icons/arrow.png";

const Collection = () => {
  return (
    <section className="flex flex-col gap-9">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="uppercase font-semibold font-chillax text-2xl sm:text-3xl md:text-4xl">
          Our Collection
        </h2>
        <p className="text-sm sm:text-base">
          Our latest collection, where classic and contemporary styles converge
          in perfect harmony.
        </p>
      </div>

      <div className="flex flex-col items-center sm:flex-row justify-center gap-4 z-0">
        <div className="bg-collection1 relative w-full sm:w-1/2 lg:w-305 h-446 bg-center bg-no-repeat bg-cover rounded-4xl">
          <div className="absolute inset-0 bg-black bg-opacity-15 flex justify-center items-end rounded-4xl pb-6">
            <a
              href="#"
              className="font-semibold bg-white text-black rounded-full px-5 py-3 text-nowrap uppercase text-sm text-center flex flex-row gap-1.5"
            >
              Learn More
              <img loading='lazy' className="pointer-events-none" src={arrow} alt="arrow-icon" />
            </a>
          </div>
        </div>
        <div className="bg-collection2 relative w-full sm:w-1/2 lg:w-675 h-446 bg-center bg-no-repeat bg-cover rounded-4xl">
          <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center rounded-4xl">
            <div className="text-center">
              <h3 className="font-bold font-chillax text-3xl md:text-5xl uppercase text-transparent bg-clip-text text-stroke-white">
                Classic men
              </h3>
              <p className="text-sm md:text-lg text-white">
                We’re changing the way things get made
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
