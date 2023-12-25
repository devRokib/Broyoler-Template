

import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUEVvP0wxJbGWMeQNADFI-t8wvz580AW4",
  authDomain: "fullbalancecalculator.firebaseapp.com",
  projectId: "fullbalancecalculator",
  storageBucket: "fullbalancecalculator.appspot.com",
  messagingSenderId: "312508357440",
  appId: "1:312508357440:web:bf890c760d5fef638df8a5",
  measurementId: "G-WX0F8MRMCH"
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
