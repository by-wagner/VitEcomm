import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductListWrapper } from "./HomePageStyles";
import { getProducts } from "../productService";
import { Product } from "../types";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <ProductListWrapper>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListWrapper>
  );
};

export default HomePage;
