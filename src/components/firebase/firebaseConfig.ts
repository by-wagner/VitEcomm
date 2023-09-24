// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvpyGrzKkA2n-WQfoMUHlfQnoeC2wESws",
  authDomain: "vitecomm-3c711.firebaseapp.com",
  projectId: "vitecomm-3c711",
  storageBucket: "vitecomm-3c711.appspot.com",
  messagingSenderId: "821740997966",
  appId: "1:821740997966:web:e5b9a9c4fd9d5dc404221f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
