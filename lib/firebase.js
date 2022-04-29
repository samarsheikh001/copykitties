import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7CBQM-puTd5CmP3_Pfqhc48UwNpkjz_s",
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

export function signIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export function signOut() {
  auth.signOut();
}
