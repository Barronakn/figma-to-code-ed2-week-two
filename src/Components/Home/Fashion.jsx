import React from "react";
import { Collection, Products } from "../Fashion";

const Fashion = ({collections}) => {

  return (
    <section className="pt-17 md:mx-30 sm:mx-11.5 mx-5">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-chillax font-semibold text-center px-2">
        Discover the latest trends in summer fashion. Shop now and refresh your
        wardrobe with our stylish summer shirts.
      </h3>
      <Products collections={collections} />
      <Collection />
    </section>
  );
};

export default Fashion;
