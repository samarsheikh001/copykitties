import { auth, db } from "./firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export function useUserData() {
  const [user] = useAuthState(auth);
  const [isUserPremium, setIsUserPremium] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [tokens, setUserTokens] = useState(0);
  const [customerId, setCustomerId] = useState(undefined);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return unsubscribe;
  }, []);

  useEffect(() => {
    let unsubscribe;
    if (user) {
      const ref = doc(db, `users/${user.email}`);
      unsubscribe = onSnapshot(ref, (userDoc) => {
        console.log(userDoc.data());
        setIsUserPremium(userDoc.data()?.isPremium);
        setUserTokens(userDoc.data()?.tokens);
        setCustomerId(userDoc.data()?.customer.id);
      });
    } else {
      setIsUserPremium(false);
    }
    return unsubscribe;
  }, [user]);
  return { user, isUserPremium, loading, tokens, customerId };
}