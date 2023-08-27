import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./components/Cart/CartContext";

const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <NavBar />
        <ItemListContainer greeting="Bem-vindo à nossa loja!" />
      </CartProvider>
    </>
  );
};

export default App;
