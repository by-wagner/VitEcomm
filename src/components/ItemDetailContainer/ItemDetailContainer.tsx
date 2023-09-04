import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Product } from "../types";
import { db } from "../firebase/firebaseConfig";

const getItem = async (id: string): Promise<Product> => {
  const productDoc = doc(db, "products", id);
  const productSnapshot = await getDoc(productDoc);
  if (productSnapshot.exists()) {
    return {
      id: productSnapshot.id,
      ...productSnapshot.data(),
    } as unknown as Product;
  } else {
    throw new Error("Produto não encontrado");
  }
};

function ItemDetailContainer() {
  const [item, setItem] = useState<Product | null>(null);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (id) {
      getItem(id)
        .then((result) => setItem(result))
        .catch((error) =>
          console.error("Erro ao buscar detalhes do item:", error)
        );
    } else {
      console.error("ID do produto não fornecido.");
    }
  }, [id]);

  return item ? <ItemDetail item={item} /> : <p>Carregando detalhes...</p>;
}

export default ItemDetailContainer;
