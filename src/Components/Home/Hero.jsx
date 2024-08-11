import React from "react";
import BtnWhite from "../BtnWhite";
import arrow from "../../assets/icons/arrow.png";

const Hero = () => {
  return (
    <section className="bg-hero bg-center bg-cover bg-no-repeat text-center text-white h-500 rounded-2xl md:mx-30 sm:mx-11.5 mx-5 mt-48">
      <div className="bg-black-50 bg-opacity-10 h-500 py-24 flex flex-col items-center gap-11 rounded-2xl px-5">
        <div className="flex flex-col items-center gap-4.5">
          <div className="flex flex-row items-center gap-3">
            <div className="border-b border-b-white w-17"></div>
            <p className="text-xs-small sm:text-sm">We bring new fashion to the world</p>
            <div className="border-b border-b-white w-17"></div>
          </div>
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-chillax font-bold">
              Discover the lastest fashion trends here
            </h2>
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base max-w-2xl">
              Discover a world of fashion with our meticulously curated outfits.
              Shop now to update your wardrobe with chic and stylish outfits.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <BtnWhite btn="Start shopping" />
          <a className="bg-white rounded-full w-11 h-11" href="#">
            <img
              loading="lazy"
              className="w-auto h-auto pointer-events-none pl-3 pt-3"
              src={arrow}
              alt="arrow-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
