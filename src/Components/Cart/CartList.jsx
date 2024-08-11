import React from "react";
import clear from "../../assets/icons/remove.png";
import add from "../../assets/icons/plus.png";
import less from "../../assets/icons/remove.png";
import remove from "../../assets/icons/trash.png";
import { useCart } from '../Cart/CartContext';

const CartList = () => {
  const { cart, clearCart, updateQuantity, removeItem } = useCart();

  const handleIncreaseQuantity = (id) => {
    updateQuantity(id, cart.find(item => item.id === id).quantity + 1);
  };

  const handleDecreaseQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    if (item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  return (
    <section className="w-full xl:w-2/3 flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-chillax text-lg md:text-2xl font-semibold">
          Cart({cart.length})
        </h3>
        <button
          onClick={clearCart}
          className="text-gray-350 flex flex-row justify-center items-center gap-1 py-2 px-6.5 bg-gray-150 text-nowrap rounded-5xl"
        >
          <img
            loading="lazy"
            className="pointer-events-none"
            src={clear}
            alt="clear-img"
          />
          <span className="text-xs-small sm:text-xs">Clear Cart</span>
        </button>
      </div>
      <table>
        <thead className="border-b border-b-gray-150">
          <tr className="flex flex-row justify-between">
            <th className="text-xs-small sm:text-xs text-gray-350 w-1/2 text-start">Product</th>
            <th className="text-xs-small sm:text-xs text-gray-350">Quantity</th>
            <th className="text-xs-small sm:text-xs text-gray-350">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr
              className="border-b border-b-gray-150 flex flex-row justify-between py-5"
              key={product.id}
            >
              <td className="flex flex-row gap-2.5 w-1/2">
                <img
                  loading="lazy"
                  className="w-11 h-11 sm:w-18 sm:h-18 rounded-lg"
                  src={product.image}
                  alt={product.title}
                />
                <div>
                  <h4 className="text-xs-small sm:text-sm font-semibold">{product.title}</h4>
                  <p className="text-xs-small sm:text-xs text-gray-350">
                  {isNaN(product.variant.title)
                        ? product.variant.title
                        : `Size: ${product.variant.title}`}
                  </p>
                  <span className="text-xs-small sm:text-sm font-semibold">
                    ${product.price}
                  </span>
                </div>
              </td>
              <td className="flex flex-row items-center gap-2 mx-2">
                <div className="text-gray-350 flex flex-row justify-center items-center gap-5 sm:py-3 py-2 sm:px-6.5 px-2 bg-gray-150 rounded-5xl">
                  <button onClick={() => handleIncreaseQuantity(product.id)}>
                    <img
                      loading="lazy"
                      className="pointer-events-none"
                      src={add}
                      alt="add-img"
                    />
                  </button>
                  <span className="text-xs sm:text-sm">{product.quantity}</span>
                  <button onClick={() => handleDecreaseQuantity(product.id)}>
                    <img
                      loading="lazy"
                      className="pointer-events-none"
                      src={less}
                      alt="less-img"
                    />
                  </button>
                </div>
                <div className="text-gray-350 flex justify-center sm:w-11 w-8 sm:h-11 h-8 sm:py-3 py-2 sm:px-3 px-2 bg-gray-150 rounded-full">
                  <button onClick={() => removeItem(product.id)}>
                    <img
                      loading="lazy"
                      className="pointer-events-none"
                      src={remove}
                      alt="remove-img"
                    />
                  </button>
                </div>
              </td>
              <td className="text-xs sm:text-sm font-semibold place-content-center">
                ${product.price * product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CartList;
