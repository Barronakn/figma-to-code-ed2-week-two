import React, { useState } from "react";

const Order = ({ products }) => {
  const [selectedOption, setSelectedOption] = useState("option2");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <section className="w-full xl:w-1/2 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-sm font-semibold">Your Order</h4>
          <p className="text-xs text-gray-350">
            By placing your order, you agree to Ballamas{" "}
            <a className="text-black underline" href="#">
              Privacy
            </a>{" "}
            and{" "}
            <a className="text-black underline" href="#">
              Policy
            </a>
            .
          </p>
        </div>

        <table>
          <tbody>
            {products.map((product, index) => (
              <tr className="flex flex-row justify-between py-5" key={index}>
                <td className="flex flex-row items-center gap-3 w-1/2">
                  <div>
                    <img
                      loading="lazy"
                      className="sm:w-18 sm:h-18 w-11 h-11 object-cover rounded-lg"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{product.title}</h4>
                    <p className="text-xs text-gray-350">
                      {isNaN(product.variant.title)
                        ? product.variant.title
                        : `Size: ${product.variant.title}`}
                    </p>
                  </div>
                </td>

                <td className="text-sm font-semibold place-content-center">
                  ${product.price * product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col gap-6">
          <div className="border-b border-b-gray-150 text-sm flex flex-col gap-1 pb-3">
            <div className="flex flex-row justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Discount</p>
              <p>$0</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm font-semibold">Order total</p>
            <p className="text-base font-extrabold">${subtotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-3.5">Shipping method</h4>
        <form className="flex flex-col gap-3" action="#">
          <div className="border border-gray-150 rounded-xl flex flex-row justify-between p-3">
            <label className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleChange}
                  className="appearance-none h-6 w-6 border-2 border-black rounded-full cursor-pointer"
                />
                {selectedOption === "option1" && (
                  <div className="absolute top-1 left-1 h-4 w-4 bg-black rounded-full"></div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-black text-xs sm:text-sm">
                  Free shipping
                </span>
                <span className="text-xs text-gray-350">
                  7-30 business days
                </span>
              </div>
            </label>
            <div className="flex flex-row justify-between">
              <p>$0</p>
            </div>
          </div>

          <div className="border border-gray-150 rounded-xl flex flex-row items-center justify-between p-3 space-x-4">
            <label className="flex flex-row items-center space-x-2">
              <div className="relative">
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option1"}
                  onChange={handleChange}
                  className="appearance-none h-6 w-6 border-2 border-black rounded-full cursor-pointer"
                />
                {selectedOption === "option2" && (
                  <div className="absolute top-1 left-1 h-4 w-4 bg-black rounded-full"></div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-black text-xs sm:text-sm">
                Regular shipping
                </span>
                <span className="text-xs text-gray-350">
                  3-14 business days
                </span>
              </div>
            </label>
            <div className="flex flex-row justify-between">
              <p>$7,50</p>
            </div>
          </div>

          <div className="border border-gray-150 rounded-xl flex flex-row items-center justify-between p-3 space-x-4">
            <label className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="radio"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleChange}
                  className="appearance-none h-6 w-6 border-2 border-black rounded-full cursor-pointer"
                />
                {selectedOption === "option3" && (
                  <div className="absolute top-1 left-1 h-4 w-4 bg-black rounded-full"></div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-black text-xs sm:text-sm">
                  Express shipping
                </span>
                <span className="text-xs text-gray-350">1-3 business days</span>
              </div>
            </label>
            <div className="flex flex-row justify-between">
              <p>$22,50</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Order;
