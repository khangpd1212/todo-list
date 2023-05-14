import { User } from "../../features/auth/state/AuthState";
import { useLocalStorage } from "./useLocalStorage";
export const useUser = () => {
  const { getItem, setItem } = useLocalStorage();

  const addUser = (user: User) => {
    return setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    return setItem("user", "");
  };

  const getUser = () => {
    return getItem("user")
  }
  return {getUser, addUser, removeUser };
};
