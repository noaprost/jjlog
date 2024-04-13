"use client";
import API from "@/service/axios";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  user: boolean;
  updateUser: (user: boolean) => void;
  getUserName: () => string;
}

const AuthContext = createContext<AuthContextType>({
  user: false,
  updateUser: (user) => {},
  getUserName: () => {
    return "";
  },
});

export const AuthProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");

  function updateUser(user: boolean) {
    setUser(user);
  }

  function getUserName() {
    async function fetchData() {
      const res = await API.get("/member", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      });
      console.log("member", res.data);
      setUserName(res.data.mid);
    }

    fetchData();
    return userName;
  }

  return (
    <AuthContext.Provider value={{ user, updateUser, getUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
