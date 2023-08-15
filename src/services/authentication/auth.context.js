import React, { useState, createContext, useRef } from "react";
import { userLogin } from "./auth.service";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useRef(getAuth()).current;

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    userLogin(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        isAuthenticated: !!user,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
