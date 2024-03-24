"use client";
import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import React from "react";

type LoginData = {
  user: boolean;
  setUser: React.Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<LoginData>({
  user: false,
  setUser: () => {},
});

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;
