import React, { useState } from "react";
import { Button } from "./ItemCountStyles";

interface ItemCountProps {
  stock: number; 
  initial: number;
  onAdd: (quantity: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  return (
    <div>
      <Button onClick={handleDecrease}>-</Button>
      <span>{quantity}</span>
      <Button onClick={handleIncrease}>+</Button>
      <Button onClick={handleAddToCart} disabled={stock === 0}>
        Adicionar ao Carrinho
      </Button>
    </div>
  );
};

export default ItemCount;
