import { Product } from './types'; 

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Produto 1", description: "Descrição Produto 1", price: 100, pictureUrl: "url_imagem1" },
        { id: 2, title: "Produto 2", description: "Descrição Produto 2", price: 200, pictureUrl: "url_imagem2" },
      ]);
    }, 2000);
  });
};
