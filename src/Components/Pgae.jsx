// src/components/Pgae.jsx
import React from "react";
import useCartStore from "../Store/Cart";

const Pgae = () => {
  const cart = useCartStore((state) => state.cart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.getTotalPrice());

  return (
    <section className="min-h-screen bg-[#DBE2DC] p-6">
      <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg text-[#335765]">Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-4 max-w-4xl mx-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-[#335765]">{item.name}</h3>
                  <p className="text-[#74A8A4]">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 rounded-full bg-[#335765] text-white text-lg"
                >
                  −
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 rounded-full bg-[#335765] text-white text-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-xl"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-right text-2xl font-bold text-[#335765]">
            Total: ₹{total}
          </div>
        </div>
      )}
    </section>
  );
};

export default Pgae;
