import React, { useState } from "react";
import arrow_right from "../../assets/icons/arrow-white-right.png";
import lock from "../../assets/icons/lock.png";
import bank from "../../assets/icons/bank.png";
import card from "../../assets/icons/card.png";
import { useNavigate } from "react-router-dom";
import Checked from "../Checked";

const PayementDetails = ({ products }) => {
  const [selectedMethod, setSelectedMethod] = useState("Debit/Credit Card");

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const navigate = useNavigate();

  const handleredirect = () => {
    navigate("/succes-message");
  };

  return (
    <section className="w-full xl:w-1/2 flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold">Payment details</h4>
        <p className="text-xs text-gray-350">
          Complete your purchase by providing your payment details.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Shipping address</h4>
        <form className="flex flex-col gap-5.5" method="post">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full gap-2">
              <label className="text-xs" htmlFor="firstname">
                First Name
              </label>
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="text"
                name="fisrtname"
                id="fisrtname"
                placeholder="Enter your first Name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="text-xs" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full gap-2">
              <label className="text-xs" htmlFor="email">
                Email address
              </label>
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="text-xs" htmlFor="phone">
                Phone number
              </label>
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full gap-2">
              <label className="text-xs" htmlFor="address">
                Address
              </label>
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="text-xs" htmlFor="city">
                City
              </label>
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full gap-2">
              <label className="text-xs" htmlFor="region">
                Region
              </label>
              <select
                className="border border-gray-150 bg-white w-full text-xs placeholder:text-black rounded-4xl p-3.5 hover:cursor-pointer"
                name="region"
                id="region"
              >
                <option value="region">Enter your region</option>
                <option value="Region 1">Region 1</option>
                <option value="Region 2">Region 2</option>
                <option value="Region 3">Region 3</option>
                <option value="Region 4">Region 4</option>
                <option value="Region 5">Region 5</option>
              </select>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="text-xs" htmlFor="postal">
                Postal code
              </label>
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="text"
                name="postal"
                id="postal"
                placeholder="Enter your postal code"
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Select payment method</h4>
            <div className="flex flex-row gap-3">
              <div
                onClick={() => setSelectedMethod("Debit/Credit Card")}
                className={`w-1/2 border rounded-xl flex flex-col gap-3 p-3 cursor-pointer ${
                  selectedMethod === "Debit/Credit Card"
                    ? "border-black"
                    : "border-gray-150"
                }`}
              >
                <div>
                  <img src={card} alt="card-icon" />
                </div>
                <p className="text-xs">Debit / Credit Card</p>
              </div>
              <div
                onClick={() => setSelectedMethod("Virtual account")}
                className={`w-1/2 border rounded-xl flex flex-col gap-3 p-3 cursor-pointer ${
                  selectedMethod === "Virtual account"
                    ? "border-black"
                    : "border-gray-150"
                }`}
              >
                <div>
                  <img src={bank} alt="bank-icon" />
                </div>
                <p className="text-xs">Virtual account</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-between border rounded-4xl border-gray-150 p-3.5">
              <input
                className=" w-full text-xs placeholder:text-black"
                type="text"
                name="card_number"
                id="card_number"
                placeholder="Card number"
              />
              <img src={lock} alt="lock-icon" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full gap-2">
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="text"
                name="expiration_date"
                id="expiration_date"
                placeholder="Expiration date (MM/YY)"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <input
                className="border border-gray-150 w-full text-xs placeholder:text-black rounded-4xl p-3.5"
                type="text"
                name="security_code"
                id="security_code"
                placeholder="Security code"
              />
            </div>
          </div>

          <div className="flex flex-row gap-1">
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={toggleCheckbox}
                  className="appearance-none h-4.5 w-4.5 border-2 cursor-pointer border-black rounded-md bg-white checked:bg-black checked:border-black"
                />
                {isChecked && <Checked />}
              </div>
            </div>
            <label className="text-xs" htmlFor="#">
              Use shipping address as billing address
            </label>
          </div>

          <div
            onClick={handleredirect}
            className="flex flex-row w-full gap-2 mx-auto my-0 justify-center font-semibold cursor-pointer bg-black text-white rounded-4xl text-center fit-element text-sm px-5 md:px-8 md:py-3.5 py-3 border border-gray-150"
          >
            <input type="submit" value={`Pay $${subtotal}`} />
            <img src={arrow_right} alt="arrow-right-icon" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PayementDetails;
