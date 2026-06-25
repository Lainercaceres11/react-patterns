import "./App.css";
import { HocDemo } from "./demos/hoc-demo";
import { HooksDemo } from "./demos/hooks-demo";

function App() {
  return (
    <div className="max-w-7xl mx-auto py-2 px-2 space-y-2">
      <HocDemo />
      <hr />
      <HooksDemo />
    </div>
  );
}

export default App;
