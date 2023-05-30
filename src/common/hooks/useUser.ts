import { User } from "firebase/auth";
import { useLocalStorage } from "./useLocalStorage";
export const useUser = () => {
  const { getItem, setItem } = useLocalStorage();

  const addUser = (user: Partial<User>) => {
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

  const setToken = (token: string) => {
    return setItem("accessToken", JSON.stringify(token));
  };

  const token = getItem("accessToken");

  const checkToken = () => {
    // return true
    return token ? true : false;
  };
  return { checkToken, getUser, addUser, removeUser, token, setToken };
};
