import { createContext } from "react";
import { User } from "firebase/auth";

export interface UserContextInterface {
  user: User | null | undefined;
  isUserPremium: boolean;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  isUserPremium: false,
});
