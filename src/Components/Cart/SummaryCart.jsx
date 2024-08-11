import React from 'react';

const SummaryCart = ({ products }) => {
    const subtotal = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return (
        <aside className="xl:w-1/3 md:w-1/2 w-full border border-gray-150 py-4 px-6 rounded-xl flex flex-col h-fit gap-4">
          <h4 className="text-base sm:text-lg font-semibold">Order summary</h4>
          <div className="border-b border-b-gray-150 text-sm flex flex-col gap-1">
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
            <p className="sm:text-sm text-xs font-semibold">Order total</p>
            <p className="sm:text-sm text-xs font-extrabold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <a href='/checkout' className="uppercase text-center bg-black hover:bg-transparent hover:text-black text-white font-semibold border text-sm border-black py-3 px-17 rounded-5xl text-nowrap">
              Checkout now
            </a>
          </div>
        </aside>
    );
};

export default SummaryCart;
