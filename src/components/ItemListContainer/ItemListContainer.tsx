import React, { useState, useEffect } from "react";
import { getProducts } from "/Users/wagner/ViteEcomm/src/services/productService.tsx";
import ItemList from "../ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(result => setProducts(result))
      .catch(error => console.error("Houve um erro ao buscar os produtos:", error));
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;

