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
    const jsonUser = getItem("user");
    const user: User = jsonUser ? JSON.parse(jsonUser) : {};
    return user;
  };

  const checkToken = () => {
    return getUser()?.token ? true : false;
  };
  return { checkToken, getUser, addUser, removeUser };
};
