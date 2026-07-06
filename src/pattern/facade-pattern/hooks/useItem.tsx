const items = [
  {
    id: 1,
    name: "Item 1",
    price: 98,
    quantity: 1,
  },
  {
    id: 2,
    name: "Item 2",
    price: 20,
    quantity: 2,
  },
  {
    id: 3,
    name: "Item 3",
    price: 30,
    quantity: 3,
  },
  {
    id: 4,
    name: "Item 4",
    price: 40,
    quantity: 4,
  },
];

export default function useItem() {
  const discount = items.map((item) =>
    item.quantity >= 2 ? item.price * 0.1 : 0,
  );

  return { items, discount };
}
