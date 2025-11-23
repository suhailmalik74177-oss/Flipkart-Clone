import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser({
        ...parsed,
        token: storedToken || parsed.token,
      });
    }
  }, []);

  const saveUser = (userData, token) => {
    if (!userData) return;

    const finalUser = {
      ...userData,
      token: token || userData.token,
    };

    setUser(finalUser);
    localStorage.setItem("user", JSON.stringify(finalUser));
    if (token) localStorage.setItem("token", token);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, saveUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
