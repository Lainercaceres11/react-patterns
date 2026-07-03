import { useCallback, useState } from "react";
import { Child } from "./child";

export const Memorized = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">{count}</h1>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
        <Child onClick={handleClick} />
      </div>
    </div>
  );
};
