import type { Products } from "./types/product-types";

export const ProductCard = ({
  product,
  onAddToCart,
}: {
  product: Products;
  onAddToCart: (product: Products) => void;
}) => {
  return (
    <article key={product.id} className="p-4 space-y-2">
      <h2 className="text-large font-bold">{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md shadow-sm transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add to Cart
      </button>
    </article>
  );
};
