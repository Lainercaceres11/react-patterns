import { useState } from "react";
import Toast from "./toast";

export type ToastVariant = "success" | "error" | "info";

type ToastData = {
  variant: ToastVariant;
  message: string;
  icon: React.ReactNode;
} | null;

const toastVariants = {
  success: {
    icon: <span>✅</span>,
    message: "Product added successfully!",
  },
  error: {
    icon: <span>❌</span>,
    message: "Something went wrong.",
  },
  info: {
    icon: <span>ℹ️</span>,
    message: "This is an informational message.",
  },
};

export default function ToastManager() {
  const [toast, setToast] = useState<ToastData>(null);

  const handleOpenToast = (variant: ToastVariant) => {
    setToast({
      variant,
      ...toastVariants[variant],
    });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={() => handleOpenToast("success")}
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Success
        </button>

        <button
          onClick={() => handleOpenToast("error")}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Error
        </button>

        <button
          onClick={() => handleOpenToast("info")}
          className="rounded border px-4 py-2"
        >
          Info
        </button>
      </div>

      {toast && (
        <Toast
          variant={toast.variant}
          icon={toast.icon}
          message={toast.message}
          onClose={handleCloseToast}
        />
      )}
    </>
  );
}
