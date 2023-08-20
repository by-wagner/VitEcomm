import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à nossa loja!" />
    </>
  );
};

export default App;
