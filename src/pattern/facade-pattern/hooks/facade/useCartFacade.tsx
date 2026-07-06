import useItem from "../useItem";

export default function useCartFacade() {
  const { items, discount } = useItem();

  const total_price = items.reduce((acc, item) => acc + item.price, 0);

  const hasDiscount = discount.reduce((acc, item) => acc + item, 0);

  const checkout = () => {
    const total = total_price - hasDiscount;
    return total;
  };

  return { items, total_price, hasDiscount, checkout };
}
