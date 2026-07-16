export default function Widget() {
  if (Math.random() > 0.5) throw new Error("Widget error");

  return (
    <div className="border p-2 m-2">
      <h1>Widget</h1>
      <p>Example widget</p>
    </div>
  );
}
