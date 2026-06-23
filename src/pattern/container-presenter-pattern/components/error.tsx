export const Error = ({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) => {
  return (
    <div>
      <p>{error}</p>
      <button
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md shadow-sm transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onRetry}
      >
        Try again
      </button>
    </div>
  );
};
