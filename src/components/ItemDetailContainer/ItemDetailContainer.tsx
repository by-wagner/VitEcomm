import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Product } from '../types';

const getItem = (): Promise<Product> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Produto Detalhado",
        description: "Descrição detalhada do produto.",
        price: 150,
        pictureUrl: "url_imagem_detalhada",
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState<Product | null>(null);

  useEffect(() => {
    getItem()
      .then((result) => setItem(result))
      .catch((error) => console.error("Erro ao buscar detalhes do item:", error));
  }, []);

  return item ? <ItemDetail item={item} /> : <p>Carregando detalhes...</p>;
}

export default ItemDetailContainer;

