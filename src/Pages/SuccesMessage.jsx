import React from "react";
import { Footer, Navbar, NavbarHead } from '../Layouts';
import succes from "../assets/icons/succes.png";

const SuccesMessage = () => {
  return (
    <div className="container">
      <NavbarHead />
      <Navbar />
      <div className="md:mx-30 sm:mx-11.5 mx-5 pt-48 flex flex-col items-center text-center gap-2.5">
        <div>
          <img src={succes} alt="succes-icon" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold">Thanks for your order !</h3>
        </div>
        <div>
          <p className="text-xs">
            The order confirmation has been sent to johndoe@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccesMessage;
