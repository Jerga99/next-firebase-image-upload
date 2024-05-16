
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYSh1JiiMWk6vs6wouH-k8BYweNvICczU",
  authDomain: "next-image-upload.firebaseapp.com",
  projectId: "next-image-upload",
  storageBucket: "next-image-upload.appspot.com",
  messagingSenderId: "116652877305",
  appId: "1:116652877305:web:baad1c1770764b18d54928"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};
