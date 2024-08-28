import React, { useEffect } from "react";
import { Footer, Navbar, NavbarHead } from "../Layouts";
import { Order, PayementDetails } from "../Components/Checkout";
import { useCart } from "../Components/Cart/CartContext";

const Checkout = () => {
  const { cart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="container">
      <NavbarHead />
      <Navbar />
      <div className="md:mx-30 sm:mx-11.5 mx-5 pt-48">
        <h3 className="font-chillax text-2xl font-semibold">Checkout</h3>
        <div className="flex flex-col xl:flex-row gap-28">
          <Order products={cart} />
          <PayementDetails products={cart} />
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Checkout;
