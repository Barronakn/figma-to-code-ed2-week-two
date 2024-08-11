import React, { useState } from "react";
import search from "../../assets/icons/search.png";
import user from "../../assets/icons/user.png";
import panier from "../../assets/icons/cart-2.png";
import LogoBlack from "../../Components/LogoBlack";
import OpenMenu from "./OpenMenu";
import CloseMenu from "./CloseMenu";
import { useCart } from "../Cart/CartContext";

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(true);
  };

  const handleclose = () => {
    setOpen(false);
  };

  const { cart } = useCart();

  return (
    <div className="block xl:hidden">
      <div className="fixed z-50 w-full top-10 sm:top-12 bg-white md:px-30 sm:px-11.5 px-5">
        <div className="border-b border-b-gray-150 py-6.5 flex flex-row justify-between items-center">
          {open ? (
            <CloseMenu handleclose={handleclose} />
          ) : (
            <OpenMenu handleopen={handleopen} />
          )}
          <LogoBlack />
          <div className="flex flex-row gap-3">
            <div>
              <img src={search} alt="search-icon" />
            </div>
            <a className="flex flex-row" href="/cart">
              <img src={panier} alt="panier-icon" />({cart.length})
            </a>
          </div>
        </div>
        <nav>
          <ul
            className={`fixed z-40 text-lg top-30 sm:top-40 left-0 h-screen w-full flex flex-col items-center gap-11 bg-white transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center gap-4.5">
            <li>
              <a className="hover:underline" href="#">
                Men
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Women
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Kids
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Collection
              </a>
            </li>

            <li>
              <a className="hover:underline" href="#">
                Shop
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                AboutUs
              </a>
            </li>
            <li>
              <a className="flex flex-row gap-1 hover:underline" href="#">
                <div>
                  <img
                    loading="lazy"
                    className="pointer-events-none"
                    src={user}
                    alt="user-icon"
                  />
                </div>
                <span>Account</span>
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/cart">
                Cart({cart.length})
              </a>
            </li>
            </div>

            <div className="flex flex-col gap-4.5 items-center">
              <li>
                <a className="hover:underline" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
