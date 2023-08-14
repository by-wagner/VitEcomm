import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à nossa loja!" />
    </div>
  );
};

export default App;

