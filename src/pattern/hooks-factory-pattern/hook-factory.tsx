import useOtpAuth from "./hooks/useOtpAuth";
import useSsoAuth from "./hooks/useSsoAuht";

const authHookMap = {
  otp: useOtpAuth,
  ss0: useSsoAuth,
};

export type AuthType = keyof typeof authHookMap;

export function createAuthHook(type: AuthType) {
  return authHookMap[type];
}
