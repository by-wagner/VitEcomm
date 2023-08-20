import React, { useState } from "react";
import { Product } from "../types";
import ItemCount from "../ItemCount/ItemCount";
import {
  DetailContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "./ItemDetailStyles";

interface ItemDetailProps {
  item: Product;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const [quantityToAdd, setQuantityToAdd] = useState<number>(0);

  const [showItemCount, setShowItemCount] = useState<boolean>(true);

  const onAdd = (quantity: number) => {
    setQuantityToAdd(quantity);
    setShowItemCount(false);
  };

  return (
    <DetailContainer>
      <ProductImage src={item.pictureUrl} alt={item.title} />
      <ProductTitle>{item.title}</ProductTitle>
      <ProductDescription>{item.description}</ProductDescription>
      <ProductPrice>Preço: ${item.price}</ProductPrice>

      {showItemCount ? (
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      ) : (
        <button
          onClick={() => {
            console.log(`Adicionado ao carrinho: ${quantityToAdd} itens`);
          }}
        >
          Finalizar Compra
        </button>
      )}
    </DetailContainer>
  );
};

export default ItemDetail;
