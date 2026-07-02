import { useState } from "react";
import { useEvent } from "../../hooks/useEvent";

type Item = { id: string; name: string };

const CartBadge = () => {
  const [items, setItem] = useState<Item[]>([]);

  useEvent("cart:add", (payload: Item) => {
    setItem((items) => [...items, payload]);
  });

  return (
    <div className="flex flex-col gap-2 border">
      <h1 className="text-2xl">Suscriber</h1>
      <p className="text-4xl"> {items.length}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartBadge;
