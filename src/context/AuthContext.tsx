"use client";
import API from "@/service/axios";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  user: boolean;
  updateUser: (user: boolean) => void;
  updateUserName: (name: string) => void;
  getUserName: () => string;
}

const AuthContext = createContext<AuthContextType>({
  user: false,
  updateUser: (user) => {},
  updateUserName: (user) => {},
  getUserName: () => {
    return "";
  },
});

export const AuthProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  async function fetchData() {
    await API.get("/member", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }).then((data) => {
      if (data.data.mid !== "anonymous") {
        console.log("여기");
        setUser(true);
        setUserName(data.data.mid);
      } else {
        console.log("저기");
        setUser(false);
        setUserName("");
      }
    });
  }
  fetchData();

  function updateUser(user: boolean) {
    setUser(user);
  }

  function updateUserName(name: string) {
    setUserName(name);
  }

  function getUserName() {
    return userName;
  }

  return (
    <AuthContext.Provider
      value={{ user, updateUser, updateUserName, getUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
