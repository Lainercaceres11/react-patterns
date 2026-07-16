export default function Error({
  error,
  onRetry,
}: {
  error: Error | null;
  onRetry: () => void;
}) {
  return (
    <div className="border text-red-500 p-2 m-2">
      <h1>Error {error?.message}</h1>
      <button
        onClick={onRetry}
        className="bg-yellow-600 p-2 m-2 rounded-md hover:bg-yellow-400 text-white"
      >
        Try again
      </button>
    </div>
  );
}
