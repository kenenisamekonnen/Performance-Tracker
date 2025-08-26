// hooks/useAuth.js
"use client";

import { useEffect, useState } from "react";
import { getRole, getToken } from "@/lib/auth";

export const useAuth = () => {
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setRole(getRole());
    setToken(getToken());
  }, []);

  return { role, token, isAuthenticated: !!token };
};
