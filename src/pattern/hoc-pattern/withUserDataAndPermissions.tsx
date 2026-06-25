import { useEffect, useState } from "react";
import type { UserData } from "./types/types";

const withUserDataAndPermissions = (WrappedComponent: React.ElementType) => {
  return function WithUserDataAndPermissionsComponent({ ...props }) {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [user, setUser] = useState<UserData | null>(null);
    const promise: Promise<UserData> = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "John Doe",
          surname: "Smith",
          permissions: ["Admin", "User"],
        });
      }, 1000);
    });

    useEffect(() => {
      setLoading(true);
      promise
        .then((data) => {
          console.log("data", data);
          setUser(data);
          setLoading(false);
        })
        .catch((e: unknown) => setError(e as Error))
        .finally(() => setLoading(false));
    }, []);

    if (!user?.permissions) {
      return <p>Access denied</p>;
    }

    if (isLoading) return <p className="text-slate-500">Loading...</p>;

    if (error) return <p className="text-red-500">{error.message}</p>;

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withUserDataAndPermissions;
