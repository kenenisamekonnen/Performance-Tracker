// components/ProtectedRoute.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { role, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    } else if (role && !allowedRoles.includes(role)) {
      router.push("/"); // unauthorized → redirect home
    }
  }, [role, isAuthenticated, router]);

  return <>{children}</>;
}
