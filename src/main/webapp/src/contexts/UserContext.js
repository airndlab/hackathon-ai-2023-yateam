import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // code to login user and set user data in state
    setUser(userData);
  };

  const logout = () => {
    // code to logout user and clear user data from state
    setUser(null);
  };

  return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
  );
};