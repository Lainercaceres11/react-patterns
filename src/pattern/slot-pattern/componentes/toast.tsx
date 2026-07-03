import type { ToastVariant } from "./toast-manager";

type ToastProps = {
  variant: ToastVariant;
  icon: React.ReactNode;
  message: string;
  onClose: () => void;
};

export default function Toast({ variant, icon, message, onClose }: ToastProps) {
  const variantStyles = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
    <div
      className={`fixed right-4 top-4 flex min-w-80 items-center justify-between gap-4 rounded-lg border-l-4 p-4 shadow-lg ${variantStyles[variant]}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>

        <div>
          <p className="font-semibold capitalize">{variant}</p>
          <p>{message}</p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="rounded border px-3 py-1 hover:bg-white/40"
      >
        ✕
      </button>
    </div>
  );
}
