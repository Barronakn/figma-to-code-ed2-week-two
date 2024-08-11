import React from "react";
import { Fashion, Hero } from "../Components/Home";
import { Footer, Navbar, NavbarHead } from "../Layouts";

const Home = () => {

  return (
    <div className="container">
      <NavbarHead />
      <Navbar />
      <Hero />
      <Fashion />
      <Footer />
    </div>
  );
};

export default Home;
