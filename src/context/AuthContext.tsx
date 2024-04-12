"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  user: boolean;
  updateUser: (user: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: false,
  updateUser: (user) => {},
});

export const AuthProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);

  function updateUser(user: boolean) {
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
