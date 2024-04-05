"use client";

import API from "@/service/axios";
import { useEffect, useState } from "react";

type Response = {
  accessToken: string;
  refreshToken: string;
};

export default function GenerateToken() {
  const [data, setData] = useState<Response>({
    accessToken: "",
    refreshToken: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await API.post("/generateToken", {
        mid: "jc",
        mpw: "1111",
      });
      setData(res.data);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    }
    fetchData();
  }, [data]);

  //const currentUser = [#authentication.principal.username]

  return (
    <div>
      <p>{data.accessToken}</p>
      <p>{data.refreshToken}</p>
    </div>
  );
}
