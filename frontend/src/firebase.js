import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_NNOOz_JsFpppbUq9L5krxh29ISr4_1U",
  authDomain: "geosenseai-79297.firebaseapp.com",
  projectId: "geosenseai-79297",
  storageBucket: "geosenseai-79297.firebasestorage.app",
  messagingSenderId: "1079632303825",
  appId: "1:1079632303825:web:4f697ceedc334b16d497f0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);