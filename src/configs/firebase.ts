import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD6EGGyrOoSJvIHEPUExFsnKl09j8vLLM",
  authDomain: "manage-task-19312.firebaseapp.com",
  projectId: "manage-task-19312",
  storageBucket: "manage-task-19312.appspot.com",
  messagingSenderId: "483366061581",
  appId: "1:483366061581:web:65ad4855543bfc684ab744",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
