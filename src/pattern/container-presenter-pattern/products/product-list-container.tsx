import { useEffect, useState } from "react";

import type { Products } from "./types/product-types";
import { Error } from "../components/error";

import { ProductListPresenter } from "./product-list-presenter";
import { CartSummary, type CartItem } from "../components/cart-summary";

export const ProductListContainer = () => {
  const [products, setProducts] = useState<Products[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/products");
    if (!response.ok) {
      setError(response.statusText);
      return;
    }
    const products = await response.json();
    setProducts(products);
  };

  const handleAddToCart = (product: Products) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  if (error) {
    return <Error error={error} onRetry={fetchProducts} />;
  }

  return (
    <article className="max-w-8xl mx-auto">
      <CartSummary cart={cart} />
      <ProductListPresenter products={products} onAddToCart={handleAddToCart} />
    </article>
  );
};
