import type { Products } from "../products/types/product-types";

export type CartItem = Products & {
  quantity: number;
};

type CartSummaryProps = {
  cart: CartItem[];
};

export const CartSummary = ({ cart }: CartSummaryProps) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <article className=" mx-auto mb-8 flex max-w-4xl items-center justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-md">
      <div>
        <p className="text-sm font-medium text-slate-500">Items in Cart</p>
        <p className="text-3xl font-bold text-slate-900">{totalItems}</p>
      </div>

      <div className="h-12 w-px bg-slate-200" />

      <div className="text-right">
        <p className="text-sm font-medium text-slate-500">Total Amount</p>
        <p className="text-3xl font-bold text-indigo-600">
          ${totalAmount.toFixed(2)}
        </p>
      </div>
    </article>
  );
};
