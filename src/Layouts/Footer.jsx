import React from "react";
import LogoWhite from "../Components/LogoWhite";

const Footer = () => {
  return (
    <footer className="bg-black-50 text-white md:px-30 sm:px-11.5 px-5 py-13 mt-24">
      <div className="flex flex-col xl:flex-row justify-between gap-5">
        <div className="flex flex-col gap-5">
          <LogoWhite />
          <p className="text-xs sm:text-sm">
            Subscribe to our newsletter for upcoming products and best discount
            for all items
          </p>
          <form
            className="flex flex-row gap-2 justify-start xl:justify-center items-center"
            action="#"
            method="post"
          >
            <input
              className="border border-white w-1/2 xl:w-full text-xs bg-black-50 placeholder:text-white rounded-4xl p-3.5"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <input
              className="font-semibold cursor-pointer bg-white hover:bg-black text-black hover:text-white rounded-4xl text-center fit-element text-sm px-5 sm:px-8 py-3 sm:py-3.5"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>

        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-xs sm:text-base">Product</h4>
            <ul>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Jacket
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  T-shirt
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Jacket
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Shoes
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Sunglasses
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-xs sm:text-base">Categories</h4>
            <ul>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Man
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Woman
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Kids
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                Gift
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                New arrival
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-xs sm:text-base text-nowrap">Our Social Media</h4>
            <ul>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  Youtube
                </a>
              </li>
              <li>
                <a className="text-xs-small sm:text-sm hover:underline" href="#">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="pt-8">
        <p className="text-center text-xs">© BALLAMAS 2024 by waris</p>
      </div>
    </footer>
  );
};

export default Footer;
