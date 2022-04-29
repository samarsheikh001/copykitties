import { auth, db } from "./firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";

export function useUserData() {
  const [user] = useAuthState(auth);
  const [isUserPremium, setIsUserPremium] = useState<Boolean>(false);

  useEffect(() => {
    let unsubscribe;
    if (user) {
      const ref = doc(db, `users/${user.uid}`);
      unsubscribe = onSnapshot(ref, (userDoc) => {
        setIsUserPremium(userDoc.data()?.isPremium);
      });
    } else {
      setIsUserPremium(false);
    }
    return unsubscribe;
  }, [user]);
  return { user, isUserPremium };
}
