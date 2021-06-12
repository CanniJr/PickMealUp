import React, { useState, createContext } from "react";
import { userLogin } from "./auth.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    userLogin(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        isAuthenticated,
        onLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
