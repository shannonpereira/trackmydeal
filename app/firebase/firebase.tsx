// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKqR0RfUoQtDBY5B0Ugfn0AyWgt7Nz5nI",
  authDomain: "prometeo-7529c.firebaseapp.com",
  projectId: "prometeo-7529c",
  storageBucket: "prometeo-7529c.appspot.com",
  messagingSenderId: "272532343087",
  appId: "1:272532343087:web:39a57815f3ebb16d3e79da"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export { app,auth };