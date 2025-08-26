// lib/auth.js
import { apiRequest } from "./api";

export const login = async (email, password) => {
  const data = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);
  localStorage.setItem("userId", data.userId);

  return data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("userId");
  window.location.href = "/auth/login";
};

export const getRole = () => localStorage.getItem("role");
export const getToken = () => localStorage.getItem("token");
export const getUserId = () => localStorage.getItem("userId");
