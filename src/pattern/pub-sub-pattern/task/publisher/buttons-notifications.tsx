import { eventBus } from "../../libs/eventBus";

type Categories = "success" | "error" | "warning";

const ButtonsNotifications = () => {
  const notify = (category: Categories) => {
    eventBus.publish("notification", category);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => notify("success")}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Success
      </button>
      <button
        onClick={() => notify("error")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Error
      </button>
      <button
        onClick={() => notify("warning")}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Warning
      </button>
    </div>
  );
};

export default ButtonsNotifications;
