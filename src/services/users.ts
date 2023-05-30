import { collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase";

const getUsers = await getDocs(collection(db, "users"));

export { getUsers };
