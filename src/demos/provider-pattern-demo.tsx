import { useTheme } from "../pattern/provider-pattern/learn/hooks/useTheme";
import { LanguagePage } from "../pattern/provider-pattern/task/components/language-page";
import { useAuth } from "../pattern/provider-pattern/task/hook/useAuth";

export const ProviderPatternDemo = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <div className="space-y-2">
      <nav className="flex justify-between bg-slate-800 py-2 px-2 text-white">
        <h1 className="text-3xl">My App</h1>

        <div className="flex gap-4">
          {!isAuthenticated ? (
            <button
              className="bg-blue-900 hover:bg-blue-800 rounded-2xl py-2 px-2 text-white"
              onClick={login}
            >
              Login
            </button>
          ) : (
            <button
              className="bg-blue-900 hover:bg-blue-800 rounded-2xl py-2 px-2 text-white"
              onClick={logout}
            >
              Logout
            </button>
          )}

          <button
            onClick={toggleTheme}
            className="bg-blue-900 hover:bg-blue-800 rounded-2xl py-2 px-2 text-white"
          >
            Toggle theme
          </button>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center h-screen space-y-2">
        <h2 className="text-3xl">
          {user ? "👋 Hello, " + user.name : "No user logged in"}
        </h2>
        <p>{theme ? "🌙 dark" : "✨ light"}</p>

        <LanguagePage />
      </main>
    </div>
  );
};
