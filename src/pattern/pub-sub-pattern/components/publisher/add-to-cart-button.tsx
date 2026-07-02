import { eventBus } from "../../libs/eventBus";

const products = [
  {
    id: crypto.randomUUID(),
    name: "Product 1",
  },
  {
    id: crypto.randomUUID(),
    name: "Product 2",
  },
  {
    id: crypto.randomUUID(),
    name: "Product 3",
  },
  {
    id: crypto.randomUUID(),
    name: "Product 4",
  },
  {
    id: crypto.randomUUID(),
    name: "Product 5",
  },
];

export default function AddToCartButton() {
  const handleClick = () => {
    const productIndex = Math.floor(Math.random() * products.length);
    const selectedProduct = products[productIndex];
    eventBus.publish("cart:add", {
      id: selectedProduct.id,
      name: selectedProduct.name,
    } as const);
  };
  return (
    <div className="flex gap-4 bg-blue-800 rounded py-2 px-2 ">
      <h1 className="text-2xl">Publisher</h1>
      <button
        onClick={handleClick}
        className="bg-emerald-500 hover:bg-emerald-600 rounded py-2 px-2"
      >
        Add to cart
      </button>
    </div>
  );
}
