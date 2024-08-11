import React from "react";
import { Footer, Navbar, NavbarHead } from '../Layouts';
import { CartList, SummaryCart } from "../Components/Cart";
import { useCart } from '../Components/Cart/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="container">
      <NavbarHead />
      <Navbar />
      <div className="md:mx-30 sm:mx-11.5 mx-5 pt-48 flex flex-col xl:flex-row xl:items-stretch items-center gap-11">
        <CartList products={cart} />
        <SummaryCart products={cart} />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
