import React, { useState } from "react";
import ProductsList from "./ProductsList";

const Products = ({ collections }) => {
  const [selectedCollection, setSelectedCollection] = useState(null);

  const allProducts = collections.flatMap(
    (collection) => collection.node.products.edges
  );

  return (
    <section className="py-17">
      <div className="flex flex-row justify-center gap-2 font-chillax flex-wrap mb-9">
        <button
          onClick={() => setSelectedCollection(null)}
          className={`${
            selectedCollection === null
              ? 'bg-black text-white border-black'
              : 'bg-white text-black hover:text-white hover:bg-black-50 border-black'
          } flex flex-row justify-start gap-2 text-sm sm:text-lg md:text-xl py-2 px-6 rounded-3xl whitespace-nowrap border`}
        >
          All <span className="text-xs sm:text-base">{allProducts.length}</span>
        </button>
        {collections.map((collection) => (
          <button
            key={collection.node.id}
            onClick={() => setSelectedCollection(collection.node.id)}
            className={`${
              selectedCollection === collection.node.id
                ? 'bg-black text-white'
                : 'bg-white text-black hover:text-white hover:bg-black-50 border-black'
            } rounded-3xl py-2 px-6 flex flex-row justify-start gap-2 text-sm sm:text-lg md:text-xl border`}
          >
            {collection.node.title} <span className="text-xs sm:text-base">{collection.node.products.edges.length}</span>
          </button>
        ))}
      </div>
      <ProductsList
        products={
          selectedCollection
            ? collections.find(
                (collection) => collection.node.id === selectedCollection
              ).node.products.edges
            : allProducts
        }
      />
      <div className="flex justify-center">
        <a
          href="#"
          className="font-semibold border text-center border-black rounded-4xl text-black hover:text-white hover:bg-black-50 px-8 py-3 text-nowrap text-sm"
        >
          View more
        </a>
      </div>
    </section>
  );
};

export default Products;
