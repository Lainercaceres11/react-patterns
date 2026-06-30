import "./App.css";
import OptimisticUiDemo from "./demos/optimistic-ui-demo";

import { useTheme } from "./pattern/provider-pattern/learn/hooks/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme ? "#000" : "#fff",
        color: theme ? "#fff" : "#000",
        height: "100vh",
      }}
    >
      <OptimisticUiDemo />
    </div>
  );
}

export default App;
