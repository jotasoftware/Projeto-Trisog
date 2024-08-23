import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDG4c0gts_GQ9dzmWN3AWHv3d6Ar4PJOYM",
  authDomain: "trisog-project.firebaseapp.com",
  projectId: "trisog-project",
  storageBucket: "trisog-project.appspot.com",
  messagingSenderId: "71127510588",
  appId: "1:71127510588:web:9510c426d6dae8f3abdd39"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)