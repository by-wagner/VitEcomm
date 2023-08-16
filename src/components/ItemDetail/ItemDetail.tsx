import {
  DetailContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice
} from './ItemDetailStyles';
import { Product } from '../types';

interface ItemDetailProps {
  item: Product;
}

function ItemDetail({ item }: ItemDetailProps) {
    return (
        <DetailContainer>
          <ProductImage src={item.pictureUrl} alt={item.title} />
          <ProductTitle>{item.title}</ProductTitle>
          <ProductDescription>{item.description}</ProductDescription>
          <ProductPrice>Preço: ${item.price}</ProductPrice>
        </DetailContainer>
    );
}

export default ItemDetail;

