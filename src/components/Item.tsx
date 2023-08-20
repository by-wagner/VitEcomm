import { Product } from "./types";

interface ItemProps {
  product: Product;
}

function Item({ product }: ItemProps) {
  return (
    <>
      <img src={product.pictureUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </>
  );
}

export default Item;
