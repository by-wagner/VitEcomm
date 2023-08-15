import { useState, useEffect } from "react";
import { getProducts } from "../productService";
import ItemCount from '../ItemCount/ItemCount';
import ItemList from "../ItemList";
import { Product } from "../types";

interface ItemListContainerProps {
  greeting: string;
}

function ItemListContainer({ greeting }: ItemListContainerProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((result) => setProducts(result))
      .catch((error) =>
        console.error("Houve um erro ao buscar os produtos:", error)
      );
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
      <ItemCount stock={10} initial={1} onAdd={(quantity) => console.log(quantity)} />
    </div>
  );
}

export default ItemListContainer;
