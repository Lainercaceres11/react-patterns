import React from "react";

type ToggleProps = { children: React.ReactNode };

export const ToggleWithChildren = ({ children }: ToggleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={toggle}
        className="bg-blue-900 w-30 rounded-3xl px-2 py-2 text-white"
      >
        Toggle
      </button>
      {isOpen && children}
    </div>
  );
};
