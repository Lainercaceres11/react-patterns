import "./App.css";
import { ProviderPatternDemo } from "./demos/provider-pattern-demo";

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
      <ProviderPatternDemo />
    </div>
  );
}

export default App;
