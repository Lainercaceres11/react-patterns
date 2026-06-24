export const UncontrolledForm = () => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    console.log(values);

    e.currentTarget.reset();
  };
  return (
    <section className="grid grid-col-1 md:grid-cols-2 gap-4 bg-[#0f1324] text-white p-12 rounded-2xl">
      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-2xl font-bold">Meet with Cameron</h2>
        <p>
          Let us show you how Cypulse can transform the way you govern and share
          your sensitive data.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname" className="uppercase">
            Full name
          </label>
          <input
            className="border border-gray-400 p-2 rounded-md"
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Fullname..."
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="uppercase">
            Company name
          </label>
          <input
            className="border border-gray-400 p-2 rounded-md"
            name="company"
            id="company"
            type="text"
            placeholder="Company name..."
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="uppercase">
            Email
          </label>
          <input
            className="border border-gray-400 p-2 rounded-md"
            name="email"
            id="email"
            type="email"
            placeholder="Your email..."
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="uppercase">
            Phone
          </label>
          <input
            className="border border-gray-400 p-2 rounded-md"
            name="phone"
            id="phone"
            type="number"
            placeholder="Your phone..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-800  hover:bg-indigo-900  rounded-md py-2 px-2 text-white font-bold"
        >
          Submit form
        </button>
      </form>
    </section>
  );
};
