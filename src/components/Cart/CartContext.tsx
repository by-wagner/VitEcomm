import React, { createContext, useContext, useState } from "react";
import { Product } from "../types";

export interface CartItem extends Product {
  quantity: number;
}

type CartContextType = {
  cart: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  isInCart: (id: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    if (isInCart(product.id)) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
    console.log("Cart after addItem:", cart);
  };

  const removeItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    console.log("Cart after removeItem:", cart);
  };

  const clear = () => {
    setCart([]);
    console.log("Cart after clear:", cart);
  };

  const isInCart = (id: string) => cart.some((product) => product.id === id);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};