import { createContext } from "react";
import { UserInfo } from "firebase/auth";

export interface UserContextInterface {
  user: UserInfo | null | undefined;
  isPremium: boolean;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  isPremium: false,
});
