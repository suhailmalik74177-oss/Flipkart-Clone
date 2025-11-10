import React, { createContext, useState, useContext } from "react";

// 1️⃣ Context create kar rahe hain
const UserContext = createContext();

// 2️⃣ Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Login ya update karne ka function
  const saveUser = (name, email, password) => {
    setUser({ name, email, password });
  };

  // Logout ya clear karne ka function
  const clearUser = () => {
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <UserContext.Provider value={{ user, saveUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useUser = () => {
  return useContext(UserContext);
};
