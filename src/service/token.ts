import API from "./axios";

export async function getTokenAPI({ id, pass }: { id: string; pass: string }) {
  const res = await API.post("/generateToken", {
    mid: id,
    mpw: pass,
  });
  console.log("login", res.data);
  localStorage.setItem("accessToken", res.data.accessToken);
  localStorage.setItem("refreshToken", res.data.refreshToken);
  sessionStorage.setItem("accessToken", res.data.accessToken);
}
