import { useFormField } from "../hooks/useFormField";

export const PersonalField = () => {
  const { currentStep, handleChange, formData } = useFormField();
  return currentStep === 1 ? (
    <div>
      <h1 className="text-2xl font-bold">Personal info</h1>
      <form>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-slate-700 text-sm font-bold mt-2"
          >
            Nombre
          </label>
          <input
            className="border p-2  w-125 rounded-md"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            required
            placeholder="Write your name..."
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-slate-700 text-sm font-bold mt-2"
          >
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Write your email..."
            className="border p-2  w-125 rounded-md"
            type="email"
            id="email"
            required
          />
        </div>
      </form>
    </div>
  ) : null;
};
