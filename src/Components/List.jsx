import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../Store/Cart";
import apple from "../assets/fruits/apple.avif";
import banana from "../assets/fruits/banana.avif";
import bb from "../assets/fruits/bb.webp"; // Blueberry
import cherry from "../assets/fruits/cherry.jpg";
import df from "../assets/fruits/df.webp"; // Dragon Fruit
import grapes from "../assets/fruits/grapes.jpg";
import guava from "../assets/fruits/guava.jpg";
import kiwi from "../assets/fruits/kiwi.webp";
import lychee from "../assets/fruits/lychee.webp";
import mango from "../assets/fruits/mango.webp";
import muskmelon from "../assets/fruits/muskmelon.webp";
import orange from "../assets/fruits/orange.jpg";
import papaya from "../assets/fruits/papaya.webp";
import pear from "../assets/fruits/pear.jpg";
import pineapple from "../assets/fruits/pineapple.webp";
import pomi from "../assets/fruits/pomi.jpeg"; // Pomegranate
import strawberry from "../assets/fruits/strawberry.jpg";
import watermelon from "../assets/fruits/watermelon.jpg";


const fruits = [
  { id: 1, name: "Apple", price: "₹120/kg", image: apple },
  { id: 2, name: "Banana", price: "₹60/dozen", image: banana },
  { id: 3, name: "Orange", price: "₹90/kg", image: orange },
  { id: 4, name: "Grapes", price: "₹100/kg", image: grapes },
  { id: 5, name: "Pineapple", price: "₹80/piece", image: pineapple },
  { id: 6, name: "Watermelon", price: "₹25/kg", image: watermelon },
  { id: 7, name: "Papaya", price: "₹45/kg", image: papaya },
  { id: 8, name: "Mango", price: "₹150/kg", image: mango },
  { id: 9, name: "Kiwi", price: "₹30/piece", image: kiwi },
  { id: 10, name: "Pomegranate", price: "₹110/kg", image: pomi },
  { id: 11, name: "Strawberry", price: "₹200/kg", image: strawberry },
  { id: 12, name: "Cherry", price: "₹250/kg", image: cherry },
  { id: 13, name: "Guava", price: "₹50/kg", image: guava },
  { id: 14, name: "Pear", price: "₹90/kg", image: pear },
  { id: 15, name: "Lychee", price: "₹180/kg", image: lychee },
  { id: 16, name: "Dragon Fruit", price: "₹300/kg", image: df },
  { id: 17, name: "Blueberry", price: "₹400/kg", image: bb },
  { id: 18, name: "Muskmelon", price: "₹35/kg", image: muskmelon },
];

export default function List() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section className="bg-[#DBE2DC] min-h-screen p-6">
      {/* className="bg-[#DBE2DC] min-h-screen p-6 pt-28" */}
      <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">
        Grocery Items
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {fruits.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-[#335765]">
                {product.name}
              </h3>
            </Link>
            <p className="text-[#74A8A4] font-medium mb-2">
              {product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-[#335765] text-white py-2 px-4 rounded-xl hover:bg-[#74A8A4] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
