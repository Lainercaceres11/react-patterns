import React, { useState } from "react";

export const MouseTracker = ({
  children,
}: {
  children: (position: { x: number; y: number }) => React.ReactNode;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className="w-225 h-80 flex flex-col justify-center gap-2 border"
      onMouseMove={handleMouseMove}
    >
      {children(position)}
    </div>
  );
};
