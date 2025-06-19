// src/components/ProductDetails.jsx
import { useParams, Link } from "react-router-dom";
import useCartStore from "../Store/Cart";
import React from "react";

import fruits from "../data/fruits"; // move your fruit array to a new file like /data/fruits.js

const Detail = () => {
  const { id } = useParams();
  const product = fruits.find((item) => item.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">Product not found.</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h2 className="text-3xl font-bold text-[#335765]">{product.name}</h2>
      <p className="text-lg text-[#74A8A4] mt-2">{product.price}</p>
      <p className="mt-4 text-gray-600">
        This is a fresh and delicious {product.name} straight from the farm. Perfect for your daily needs.
      </p>
      <button
        onClick={() => addToCart(product)}
        className="mt-6 bg-[#335765] text-white px-6 py-2 rounded-xl hover:bg-[#74A8A4] transition"
      >
        Add to Cart
      </button>
      <div className="mt-6">
        <Link to="/" className="text-[#335765] underline hover:text-[#74A8A4]">← Back to Products</Link>
      </div>
    </div>
  );
};

export default Detail;
