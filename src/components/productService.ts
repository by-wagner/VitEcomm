import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { Product } from "./types";

export const getProducts = async (): Promise<Product[]> => {
  const productsCollection = collection(db, "products");
  const productSnapshot = await getDocs(productsCollection);
  const products: Product[] = productSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Product)
  );
  return products;
};
