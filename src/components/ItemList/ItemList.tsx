import { Product } from "../types";
import Item from "../Item/Item";
import { ProductListContainer } from "./ItemListStyles";

interface ItemListProps {
  products: Product[];
}

function ItemList({ products }: ItemListProps) {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
}

export default ItemList;
