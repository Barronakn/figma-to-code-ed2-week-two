import React from "react";

const Order = ({ products }) => {
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
          <div className="border border-gray-150 rounded-xl flex flex-row items-center justify-between p-3">
            <div className="flex flex-row items-center gap-2.5">
              <input type="radio" className="checked:bg-black checked:border-black hover:cursor-pointer" name="method" />
              <label className="flex flex-col" htmlFor="free">
                <span className="text-black text-xs sm:text-sm">Free shipping</span>
                <span className="text-xs text-gray-350">
                  7-30 business days
                </span>
              </label>
            </div>
            <div className="flex flex-row justify-between">
              <p>$0</p>
            </div>
          </div>

          <div className="border border-gray-150 rounded-xl flex flex-row items-center justify-between p-3">
            <div className="flex flex-row items-center gap-2.5">
              <input
                className="checked:bg-black checked:border-black hover:cursor-pointer"
                checked
                type="radio"
                name="method"
              />
              <label className="flex flex-col" htmlFor="regular">
                <span className="text-black text-xs sm:text-sm">Regular shipping</span>
                <span className="text-xs text-gray-350">
                  3-14 business days
                </span>
              </label>
            </div>
            <div className="flex flex-row justify-between">
              <p>$7,50</p>
            </div>
          </div>

          <div className="border border-gray-150 rounded-xl flex flex-row items-center justify-between p-3">
            <div className="flex flex-row items-center gap-2.5">
              <input type="radio" className="checked:bg-black checked:border-black hover:cursor-pointer" name="method" />
              <label className="flex flex-col" htmlFor="express">
                <span className="text-black text-xs sm:text-sm">Express shipping</span>
                <span className="text-xs text-gray-350">1-3 business days</span>
              </label>
            </div>
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
