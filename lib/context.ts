import { createContext } from "react";
import { User } from "firebase/auth";

export interface UserContextInterface {
  user: User | null | undefined;
  isUserPremium: boolean;
  loading: boolean;
  tokens: number;
  customerId?: string;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  isUserPremium: false,
  loading: true,
  tokens: 0,
  customerId: undefined
});
