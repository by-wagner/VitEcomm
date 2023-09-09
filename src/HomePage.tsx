import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import { getProducts } from './components/productService';
import { Product } from './components/types';

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
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default HomePage;
