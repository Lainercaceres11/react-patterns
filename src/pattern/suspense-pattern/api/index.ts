import type { Preference } from "../components/preferences";
import type { UserProfileType } from "../components/user-profile";

export const fetchUser = (): Promise<UserProfileType> => {
  console.log("user call...");
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      reject(new Error("Notifications api getting failed!. Please try again."));
      return;
    }
    setTimeout(() => {
      resolve({
        id: 10,
        name: "Lainer",
        role: "Engineer",
      });
    }, 1500);
  });
};

export const fetchNotifications = (userId: number): Promise<string[]> => {
  console.log("notification call...");
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      reject(new Error("Notifications api getting failed!. Please try again."));
      return;
    }

    setTimeout(() => {
      resolve([
        `Comment on your post (${userId})`,
        "Payment received",
        "Your order is picked up",
      ]);
    }, 1500);
  });
};

export const fetchUserPreference = (userId: number): Promise<Preference[]> => {
  console.log("preference call...");
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      reject(
        new Error("User preferences api getting failed!. Please try again."),
      );
      return;
    }

    setTimeout(() => {
      resolve([
        {
          type: "Email Notifications",
          status: "on",
          userId,
        },
        {
          type: "Push Notifications",
          status: "off",
          userId,
        },
        {
          type: "Marketing Emails",
          status: "on",
          userId,
        },
      ]);
    }, 1500);
  });
};
