import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cart from "../../assets/icons/cart.png";
import { useCart } from '../Cart/CartContext';
import { productsListData } from "../Utils/productsListUtils"; 

const ProductsList = ({ products }) => {
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    clearCart();
    addToCart(productsListData(product));
    navigate("/checkout");
  };

  const handleAddToCart = (product) => {
    addToCart(productsListData(product));
  };

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {products.slice(0, 6).map((product, index) => {
          const price = product.node.variants.edges[0]?.node.price.amount;

          return (
            <div key={product.node.id} className="relative">
              <div className="relative group">
                <img
                  loading="lazy"
                  className="object-contain mb-4 rounded-4xl pointer-events-none"
                  src={product.node.featuredImage.url}
                  alt={product.node.title}
                />

                {(index < 2 || index === 4) && (
                  <div className="absolute top-5 left-5 rounded-3xl bg-white text-xs font-semibold uppercase px-2 py-1 z-10">
                    Get off 20%
                  </div>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-row gap-1 justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl p-4 cursor-pointer px-5">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex flex-row justify-center gap-2 bg-white text-black uppercase font-bold text-sm text-nowrap py-3 px-5 w-full rounded-4xl"
                  >
                    <img
                      loading="lazy"
                      className="pointer-events-none"
                      src={cart}
                      alt="cart-icon"
                    />
                    Add to cart
                  </button>

                  <button
                    onClick={() => handleBuyNow(product)}
                    className="text-center uppercase hover:bg-white hover:text-black text-white font-semibold border text-nowrap text-sm border-white py-3 px-5 w-full rounded-4xl"
                  >
                    Buy now
                  </button>
                </div>
              </div>

              <Link
                to={`/product/${product.node.id.split("/").pop()}`} 
                className="text-2xl hover:underline sm:text-3xl font-semibold uppercase"
              >
                {product.node.title}
              </Link>
              <p className="text-gray-350 text-xl sm:text-28">
                ${price}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
