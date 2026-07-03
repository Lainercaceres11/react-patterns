import { useGetUsers } from "../hooks/useGetUsers";

const Users = () => {
  const { users } = useGetUsers();

  return (
    <section className="space-y-1">
      <h1 className="text-3xl font-bold ">Users</h1>
      <hr />
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </section>
  );
};

export default Users;
