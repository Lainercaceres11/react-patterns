import { useState } from "react";
import { ProductCard } from "./product-cart";
import type { Products } from "./types/product-types";
import { Filters } from "../components/filters";

type ProductListPresenterProps = {
  products: Products[];
  onAddToCart: (product: Products) => void;
};
export const ProductListPresenter = ({
  products,
  onAddToCart,
}: ProductListPresenterProps) => {
  const [search, setSearch] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="space-y-2 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold ml-5 text-blue-900">List Products</h1>
      <Filters search={search} setSearch={setSearch} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-2 place-items-center">
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => onAddToCart(product)}
              />
            ))
          : search.trim() && <p>Product not found</p>}
      </section>
    </div>
  );
};
