
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3Rn4nS5R9yVAAvI_ak9fmn8ep5EE60pA",
  authDomain: "ammoreload-9e35d.firebaseapp.com",
  projectId: "ammoreload-9e35d",
  storageBucket: "ammoreload-9e35d.appspot.com",
  messagingSenderId: "846655623494",
  appId: "1:846655623494:web:bc40987a0085219a785547",
  measurementId: "G-79Q3MH67DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)
export const db=getFirestore()

export const signUp=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}
export const logIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}


