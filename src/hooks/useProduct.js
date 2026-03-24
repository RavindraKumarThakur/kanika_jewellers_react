import { useState, useEffect } from 'react';
import { products } from '../api/products';

export function useProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAllProducts(products);
      setLoading(false);
    }, 500);
  }, []);

  return { products: allProducts, loading };
}