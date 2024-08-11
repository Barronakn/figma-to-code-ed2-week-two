import React, { useState, useEffect } from "react";
import { useCart } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";

const Details = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();

  const variants = product.node.variants.edges.map((variant) => variant.node);

  const uniqueColors = [
    ...new Set(
      variants.flatMap((variant) =>
        variant.selectedOptions
          .filter((option) => option.name === "Color")
          .map((option) => option.value)
      )
    ),
  ];

  const uniqueSizes = [
    ...new Set(
      variants.flatMap((variant) =>
        variant.selectedOptions
          .filter((option) => option.name === "Size")
          .map((option) => option.value)
      )
    ),
  ];

  const defaultColor = uniqueColors[0] || "";
  const defaultSize = uniqueSizes[0] || "";

  useEffect(() => {
    if (defaultColor) {
      setSelectedColor(defaultColor);
    }
    if (defaultSize) {
      setSelectedSize(defaultSize);
    }
  }, [defaultColor, defaultSize]);

  const getImageUrl = () => {
    const selectedVariant = variants.find(
      (variant) =>
        (!selectedColor ||
          variant.selectedOptions.some(
            (option) =>
              option.name === "Color" && option.value === selectedColor
          )) &&
        (!selectedSize ||
          variant.selectedOptions.some(
            (option) => option.name === "Size" && option.value === selectedSize
          ))
    );
    return selectedVariant?.image?.url || product.node.featuredImage?.url || "";
  };

  const handleAddToCart = () => {
    const selectedVariant = variants.find(
      (variant) =>
        (!selectedColor ||
          variant.selectedOptions.some(
            (option) => option.name === "Color" && option.value === selectedColor
          )) &&
        (!selectedSize ||
          variant.selectedOptions.some(
            (option) => option.name === "Size" && option.value === selectedSize
          )) ||
        (uniqueColors.length === 0 && uniqueSizes.length === 0)
    );

    if (selectedVariant) {
      addToCart({
        id: product.node.id,
        title: product.node.title,
        description: product.node.description,
        price: selectedVariant.price.amount,
        currency: selectedVariant.price.currencyCode,
        image: selectedVariant.image?.url || product.node.featuredImage?.url,
        variant: {
          id: selectedVariant.id,
          title: selectedVariant.title,
          image: selectedVariant.image?.url,
          selectedOptions: selectedVariant.selectedOptions,
        },
      });
    }
  };

  const handleBuyNow = () => {
    clearCart();

    const selectedVariant = variants.find(
      (variant) =>
        (!selectedColor ||
          variant.selectedOptions.some(
            (option) => option.name === "Color" && option.value === selectedColor
          )) &&
        (!selectedSize ||
          variant.selectedOptions.some(
            (option) => option.name === "Size" && option.value === selectedSize
          )) ||
        (uniqueColors.length === 0 && uniqueSizes.length === 0)
    );

    if (selectedVariant) {
      addToCart({
        id: product.node.id,
        title: product.node.title,
        description: product.node.description,
        price: selectedVariant.price.amount,
        currency: selectedVariant.price.currencyCode,
        image: selectedVariant.image?.url || product.node.featuredImage?.url,
        variant: {
          id: selectedVariant.id,
          title: selectedVariant.title,
          image: selectedVariant.image?.url,
          selectedOptions: selectedVariant.selectedOptions,
        },
      });
      navigate("/checkout");
    }
  };

  return (
    <section className="pt-48 pb-17 md:mx-30 sm:mx-11.5 mx-5">
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="xl:w-1/2 w-full">
          <img
            loading="lazy"
            className="rounded-4xl pointer-events-none"
            src={getImageUrl()}
            alt={product.node.title}
          />
        </div>

        <div className="flex flex-col gap-7 xl:w-1/2 w-full">
          <div className="flex flex-col gap-4.5">
            <div className="flex flex-col gap-5.5">
              <div>
                <h4 className="text-3xl sm:text-4.5xl font-bold">
                  {product.node.title}
                </h4>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-bold">
                  CAD $
                  {`${
                    variants.find(
                      (variant) =>
                        (!selectedColor ||
                          variant.selectedOptions.some(
                            (option) =>
                              option.name === "Color" &&
                              option.value === selectedColor
                          )) &&
                        (!selectedSize ||
                          variant.selectedOptions.some(
                            (option) =>
                              option.name === "Size" &&
                              option.value === selectedSize
                          )) ||
                        (uniqueColors.length === 0 && uniqueSizes.length === 0)
                    )?.price.amount
                  }`}
                </p>
              </div>

              {uniqueColors.length > 0 && (
                <div className="flex flex-col gap-3.5">
                  <h3 className="text-xl sm:text-3xl">Color:</h3>
                  <div className="flex items-center flex-row gap-4">
                    {uniqueColors.map((color) => {
                      const backgroundColor =
                        color.toLowerCase() === "ocean"
                          ? "#2A5259"
                          : color
                          ? color.toLowerCase()
                          : "#ffffff";

                      const isSelectedColor = selectedColor === color;

                      return (
                        <div
                          key={color}
                          className={`${
                            isSelectedColor
                              ? "sm:w-4 sm:h-4 w-2 h-2"
                              : "sm:w-7 sm:h-7 w-5 h-5"
                          } rounded-full cursor-pointer border-2 border-gray-150 ${
                            isSelectedColor
                              ? "ring-2 ring-offset-2 ring-gray-300"
                              : ""
                          }`}
                          style={{ backgroundColor }}
                          onClick={() => {
                            setSelectedColor(color);
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              )}

              {uniqueSizes.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-3xl">Sizes:</h3>
                  <div className="flex flex-col sm:items-start items-center gap-3.5">
                    <div className="flex flex-row gap-3 sm:gap-4">
                      {uniqueSizes.map((size) => {
                        const isSelectedSize = selectedSize === size;

                        return (
                          <p
                            key={size}
                            className={`cursor-pointer rounded-5xl py-2 px-3.5 sm:px-6 ${
                              isSelectedSize
                                ? "bg-black text-white"
                                : "text-black border-black border"
                            } hover:bg-black flex flex-row gap-2 hover:text-white text-xl sm:text-2xl`}
                            onClick={() => setSelectedSize(size)}
                          >
                            {size}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center sm:justify-normal justify-center gap-3.5">
                <button
                  onClick={handleAddToCart}
                  className="w-full uppercase bg-black hover:bg-transparent hover:text-black text-center text-white font-semibold border text-sm border-black sm:py-6 sm:px-26 py-3 px-12 rounded-5xl text-nowrap"
                >
                  Add to cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full text-center bg-white border border-black hover:bg-black text-black hover:text-white uppercase font-bold text-sm text-nowrap sm:py-6 sm:px-26 py-3 px-12 rounded-5xl"
                >
                  Buy now
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <h3 className="text-2xl sm:text-3xl font-chillax">Description</h3>
              <p className="text-gray-350 text-sm sm:text-lg">
                {product.node.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
