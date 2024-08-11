import React, { useState, useEffect } from "react";
import cart from "../../assets/icons/cart.png";
import loadinggif from '../../assets/images/loading.gif';
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { API_PRODUCTS_COLLECTIONS } from "../Api/CollectionsProductsApi";

const AlsoLike = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch(API_PRODUCTS_COLLECTIONS);
        const response = await request.json();

        
        const allProducts = response.data.collections.edges.flatMap(collection =>
          collection.node.products.edges
        );

        const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());

        setProducts(shuffledProducts.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (product) => {
    clearCart();
    addToCart({
      id: product.node.id,
      title: product.node.title,
      description: product.node.description,
      price: product.node.variants.edges[0]?.node.price.amount,
      currency: product.node.variants.edges[0]?.node.price.currencyCode,
      image: product.node.featuredImage.url,
      variant: {
        id: product.node.variants.edges[0]?.node.id,
        title: product.node.variants.edges[0]?.node.title,
        image: product.node.variants.edges[0]?.node.image?.url,
        selectedOptions: product.node.variants.edges[0]?.node.selectedOptions?.map((option) => ({
          name: option.name,
          value: option.value,
        })),
      },
    });
    navigate("/checkout");
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.node.id,
      title: product.node.title,
      description: product.node.description,
      price: product.node.variants.edges[0]?.node.price.amount,
      currency: product.node.variants.edges[0]?.node.price.currencyCode,
      image: product.node.featuredImage.url,
      variant: {
        id: product.node.variants.edges[0]?.node.id,
        title: product.node.variants.edges[0]?.node.title,
        image: product.node.variants.edges[0]?.node.image?.url,
        selectedOptions: product.node.variants.edges[0]?.node.selectedOptions?.map((option) => ({
          name: option.name,
          value: option.value,
        })),
      },
    });
  };

  return (
    <section className="md:mx-30 sm:mx-11.5 mx-5">
      <h3 className="font-chillax font-semibold text-2xl sm:text-3xl mb-8">
        You may also like
      </h3>
      {loading ? (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <img src={loadinggif} alt="loading" />
        </div>
      ) : (
        <div className="alsolike flex flex-col items-center md:flex-row gap-3.5 relative overflow-x-hidden sm:overflow-x-auto">
          {products.map((product) => (
            <div key={product.node.id}>
              <div className="relative group">
                <div className="w-84 rounded-4xl">
                  <img
                    loading="lazy"
                    className="object-contain mb-4 w-84 pointer-events-none rounded-4xl"
                    src={product.node.featuredImage.url}
                    alt={product.node.title}
                  />
                </div>

                <div className="absolute inset-0 w-84 bg-black bg-opacity-50 flex flex-row gap-1 justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity rounded-4xl p-4 cursor-pointer">
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

              <div className="flex flex-col ml-6 sm:ml-auto">
                <Link
                  to={`/product/${product.node.id.split("/").pop()}`}
                  className="text-2xl hover:underline sm:text-3xl font-semibold uppercase"
                >
                  {product.node.title}
                </Link>
                <p className="text-gray-350 text-28">
                  ${product.node.variants.edges[0]?.node.price.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AlsoLike;
