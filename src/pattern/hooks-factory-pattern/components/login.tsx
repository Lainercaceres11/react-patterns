import { createAuthHook, type AuthType } from "../hook-factory";

export default function Login({ type }: { type: AuthType }) {
  const authHook = createAuthHook(type);

  const auth = authHook();

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={auth.login}
      >
        Login
      </button>
    </div>
  );
}
