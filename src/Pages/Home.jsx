import React from "react";
import { Fashion, Hero } from "../Components/Home";
import { Footer, Navbar, NavbarHead } from "../Layouts";

const Home = ({collections}) => {

  return (
    <div className="container">
      <NavbarHead />
      <Navbar />
      <Hero />
      <Fashion collections={collections} />
      <Footer />
    </div>
  );
};

export default Home;
