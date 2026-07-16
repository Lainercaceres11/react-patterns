export default function Review() {
  if (Math.random() > 0.5) throw new Error("Review error");
  return <div>Review</div>;
}
