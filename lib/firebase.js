import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

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

export const db = getFirestore(app);
export const auth = getAuth(app);