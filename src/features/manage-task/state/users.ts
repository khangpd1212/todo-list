import { collection, getDocs } from "firebase/firestore";
import { db } from "../common/configs/firebase";

const getAllUser = await getDocs(collection(db, "users"));

export { getAllUser };
