import useCartFacade from "../pattern/facade-pattern/hooks/facade/useCartFacade";
import useProfileFacade from "../pattern/facade-pattern/hooks/facade/useProfileFacade";

export default function FacadePattern() {
  const { canEditProfile, isProfileComplete, profile } = useProfileFacade();
  const { items, total_price, hasDiscount } = useCartFacade();
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Facade Pattern</h1>
      <div>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
      </div>
      <p>Status: {isProfileComplete.toString()}</p>
      <p>Puede editar: {canEditProfile.toString()}</p>
      <hr />
      <h2 className="text-2xl font-bold">Use cart facade</h2>
      {
        <div>
          {items.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      }
      <p>Has discount: {hasDiscount.toString()}</p>
      <p>Total price: {total_price}</p>
      <p>Items: {items.length}</p>
    </div>
  );
}
