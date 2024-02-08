import React from "react";
import { Product } from "../types";
import { CardContainer } from "./ProductCardStyles";
import { useCart } from "../Cart/CartContext"; // Import the useCart hook

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addItem, isInCart } = useCart(); // Use the addItem function from the CartContext

  const handleAddToCart = () => {
    // Convert the product's ID from string to number
    const productId = Number(product.id);

    // Convert the product to a CartItem and add it to the cart with a quantity of 1
    addItem({
      id: String(productId),
      name: product.title,
      price: product.price,
      quantity: 1,
      imgUrl: product.imgUrl || '',
      title: product.title || '',
      description: product.description || '',
      pictureUrl: undefined
    });
  };

  return (
    <CardContainer>
      <img src={product.imgUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      {!isInCart(product.id) && ( // Pass the ID as string
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </CardContainer>
  );
};

export default ProductCard;
