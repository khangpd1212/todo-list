import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../configs/firebase";
import {
  RequestLoginUser,
  RequestNewUser,
} from "../features/auth/state/AuthState";
import { notification } from "antd";

const createWithEmailAndPassword = ({ email, password }: RequestNewUser) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      notification.error({
        message: "Error",
        description: error.message,
      });
    });
};

const loginWithEmailAndPassword = ({ email, password }: RequestLoginUser) => {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    }
  );
};
export { createWithEmailAndPassword, loginWithEmailAndPassword };
