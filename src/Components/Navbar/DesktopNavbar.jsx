import React from "react";
import search from "../../assets/icons/search.png";
import user from "../../assets/icons/user.png";
import LogoBlack from "../../Components/LogoBlack";
import { useCart } from "../Cart/CartContext";

const DesktopNavbar = () => {
  const { cart } = useCart();

  return (
    <div className="xl:block hidden">
      <div className="container fixed z-50 w-full top-12 bg-white md:px-30 sm:px-11.5 px-5">
        <div className="border-b border-b-gray-150 py-6.5 flex flex-row justify-between items-center">
          <nav>
            <ul className="flex flex-row gap-4.5">
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
            </ul>
          </nav>
          <LogoBlack />
          <ul className="flex flex-row gap-4.5">
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
            <li>
              <img
                loading="lazy"
                className="pointer-events-none"
                src={search}
                alt="search-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
