import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB0lSCq_IVpXY4WLkAQ6YZetuEtDmgk5ks",
  authDomain: "auth-aac5f.firebaseapp.com",
  projectId: "auth-aac5f",
  storageBucket: "auth-aac5f.appspot.com",
  messagingSenderId: "491901495290",
  appId: "1:491901495290:web:66f6002f05b41d34a2a643"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)