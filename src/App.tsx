import "./App.css";

import { ControlledForm } from "./pattern/controller-and-uncontrolled-form/controlled-form/controlled-form";
import { UncontrolledForm } from "./pattern/controller-and-uncontrolled-form/uncontrolled-form/uncontrolled-form";

function App() {
  return (
    <div className="max-w-7xl mx-auto py-2 px-2 space-y-2">
      <p className="text-2xl">Controlled Form</p>
      <ControlledForm />
      <p className="text-2xl">Unontrolled Form</p>
      <UncontrolledForm />
    </div>
  );
}

export default App;
