import { Product } from "./types";
import Item from "../components/Item";

interface ItemListProps {
  products: Product[];
}

function ItemList({ products }: ItemListProps) {
  return (
    <>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
}

export default ItemList;
