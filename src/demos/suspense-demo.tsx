import { Suspense } from "react";
import UserProfile from "../pattern/suspense-pattern/components/user-profile";
import Preferences from "../pattern/suspense-pattern/components/preferences";
import Notifications from "../pattern/suspense-pattern/components/notification";
import {
  fetchNotifications,
  fetchUser,
  fetchUserPreference,
} from "../pattern/suspense-pattern/api";
import { ErrorBoundary } from "../pattern/error-boundary/error-boundary";
import Error from "../pattern/error-boundary/error";

export default function SuspenseDemo() {
  const userPromise = fetchUser();

  const notificationsPromise = userPromise.then((user) =>
    fetchNotifications(user.id),
  );

  const preferencesPromise = userPromise.then((user) =>
    fetchUserPreference(user.id),
  );

  return (
    <div className="space-y-4">
      <ErrorBoundary fallback={Error}>
        <Suspense fallback={<div>Loading profile...</div>}>
          <UserProfile promise={userPromise} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={Error}>
        <Suspense fallback={<div>Loading notifications...</div>}>
          <Notifications promise={notificationsPromise} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={Error}>
        <Suspense fallback={<div>Loading preferences...</div>}>
          <Preferences promise={preferencesPromise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
