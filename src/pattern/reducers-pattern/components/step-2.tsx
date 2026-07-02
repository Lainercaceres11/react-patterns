import { useFormField } from "../hooks/useFormField";

export const AccountField = () => {
  const { currentStep, handleChange, formData } = useFormField();
  return currentStep === 2 ? (
    <div>
      <h1 className="text-2xl font-bold">Account Information</h1>
      <form>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="text-slate-700 text-sm font-bold mt-2"
          >
            Nombre usuario
          </label>
          <input
            className="border p-2  w-125 rounded-md"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            id="username"
            required
            placeholder="Write your username..."
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-slate-700 text-sm font-bold mt-2"
          >
            Password
          </label>
          <input
            placeholder="******"
            className="border p-2  w-125 rounded-md"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-slate-700 text-sm font-bold mt-2"
          >
            Confirm Password
          </label>
          <input
            placeholder="******"
            className="border p-2  w-125 rounded-md"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            required
          />
        </div>
      </form>
    </div>
  ) : null;
};
