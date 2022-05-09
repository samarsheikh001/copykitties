import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  Timestamp,
  getDoc,
  setDoc,
  increment,
  updateDoc,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fetchPostJSON } from "../utils/api-helpers";

const firebaseConfig = {
  apiKey: process.env.FIREBASEAPIKEY,
  authDomain: "copykitties-b3f33.firebaseapp.com",
  databaseURL: "https://copykitties-b3f33-default-rtdb.firebaseio.com",
  projectId: "copykitties-b3f33",
  storageBucket: "copykitties-b3f33.appspot.com",
  messagingSenderId: "431468394916",
  appId: "1:431468394916:web:59b11693e1715bb2ba6931",
  measurementId: "G-S1EV6D7KFM",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const auth = getAuth(app);

export async function signIn() {
  await signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const userDoc = doc(db, "users", user.email);
      const userData = await getDoc(userDoc);
      if (userData.exists()) {
      } else {
        try {
          const response = await fetchPostJSON("/api/customer/create", {
            email: user.email,
          });
          setDoc(userDoc, {
            uid: user.uid,
            email: user.email,
            createdAccountDate: Timestamp.fromDate(new Date()),
            tokens: 1200,
            customer: response,
          });
        } catch (error) {
          console.log(error);
        }
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export function signOut() {
  auth.signOut();
}

export async function decrementToken(number, email) {
  const decrement = increment(-number);
  const userDoc = doc(db, "users", email);
  updateDoc(userDoc, {
    tokens: decrement,
  });
}

export async function generate(uid, email) {
  const userDoc = doc(db, "users", email);
  const userData = await getDoc(userDoc);
  return userData.data();
}

export async function rechargeToken(number, email, lastPaymentId) {
  const userDoc = doc(db, "users", email);
  const userData = await getDoc(userDoc);
  if (
    userData.get("paymentId") &&
    lastPaymentId === userData.get("paymentId")
  ) {
    console.log("Already recharged");
  } else {
    const incrementToken = increment(number);
    await setDoc(
      userDoc,
      {
        tokens: incrementToken,
        paymentId: lastPaymentId,
      },
      { merge: true }
    );
  }
}
