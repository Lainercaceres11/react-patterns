import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./pattern/provider-pattern/learn/providers/theme-provider.tsx";

import AuthProvider from "./pattern/provider-pattern/task/provider/auth-provider.tsx";
import LanguageProvider from "./pattern/provider-pattern/task/provider/language-provider.tsx";
import "../src/pattern/pub-sub-pattern/libs/listener.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
