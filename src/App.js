import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import SuccesMessage from "./Pages/SuccesMessage";
import './App.css';
import { API_PRODUCTS_COLLECTIONS } from "./Components/Api/CollectionsProductsApi";

function App() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const request = await fetch(API_PRODUCTS_COLLECTIONS);
        const response = await request.json();
        setCollections(response.data.collections.edges);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    }

    fetchCollections();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home collections={collections} />} />
        <Route path="/product/:id" element={<Product collections={collections} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/succes-message" element={<SuccesMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
