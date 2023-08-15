import { Product } from "./types";
import Item from "../components/Item";

interface ItemListProps {
  products: Product[];
}

function ItemList({ products }: ItemListProps) {
  return (
    <div>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
