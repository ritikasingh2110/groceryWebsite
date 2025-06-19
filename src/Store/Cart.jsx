// src/Store/Cart.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const exists = get().cart.find((item) => item.id === product.id);
        if (exists) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, quantity: 1 }],
          }));
        }
      },
      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      increaseQty: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },
      decreaseQty: (id) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },
      getTotalPrice: () => {
        return get().cart.reduce((acc, item) => {
          const price = parseInt(item.price.replace(/[^\d]/g, ''));
          return acc + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'grocery-cart',
    }
  )
);

export default useCartStore;
