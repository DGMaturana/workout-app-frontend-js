import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const { getItem, removeItem, setItem } = useLocalStorage();
  useEffect(() => {
    const user = getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const storeUser = (user) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const storeToken = (token) => {
    setItem("token", JSON.stringify(token));
  };

  // const removeToken = () => {

  // }

  const logIn = (user, token) => {
    storeUser(user);
    storeToken(token);
  };

  const logOut = () => {
    setUser(null);
    removeItem("user");
    removeItem("token");
  };

  return { user, logIn, logOut };
};
