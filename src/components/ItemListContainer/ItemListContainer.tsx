import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList";
import { Product } from "../types";

const getProducts = async (): Promise<Product[]> => {
  const productsCollection = collection(db, "products");
  const productSnapshot = await getDocs(productsCollection);
  return productSnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as unknown as Product)
  );
};

interface ItemListContainerProps {
  greeting: string;
}

function ItemListContainer({ greeting }: ItemListContainerProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then((result) => setProducts(result))
      .catch((error) => {
        console.error("Houve um erro ao buscar os produtos:", error);
        setError(
          "Houve um erro ao carregar os produtos. Por favor, tente novamente mais tarde."
        );
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList products={products} />
      <ItemCount
        stock={10}
        initial={1}
        onAdd={(quantity) => console.log(quantity)}
      />
    </>
  );
}

export default ItemListContainer;
