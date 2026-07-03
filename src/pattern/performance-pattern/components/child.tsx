import React from "react";

export const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child render");
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Click
    </button>
  );
});
