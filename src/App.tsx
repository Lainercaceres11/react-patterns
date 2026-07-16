import "./App.css";

import SuspenseDemo from "./demos/suspense-demo";

import { useTheme } from "./pattern/provider-pattern/learn/hooks/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="p-4"
      style={{
        backgroundColor: theme ? "#000" : "#fff",
        color: theme ? "#fff" : "#000",
        height: "100vh",
      }}
    >
      <SuspenseDemo />
    </div>
  );
}

export default App;
