import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3CW3OGlH4DpzuGlbip_kvrjP-GEDxN-0",
  authDomain: "presento-1d9cd.firebaseapp.com",
  projectId: "presento-1d9cd",
  storageBucket: "presento-1d9cd.appspot.com",
  messagingSenderId: "1024390731757",
  appId: "1:1024390731757:web:50c455371d55aa7e7379e4"

};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;