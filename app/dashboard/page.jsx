// app/dashboard/page.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { getUserId } from "@/lib/auth";
import { ROLES } from "@/lib/roles";

export default function DashboardRedirect() {
  const { role, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
      return;
    }

    const userId = getUserId();

    if (role === ROLES.ADMIN) {
      router.push("/admin/dashboard");
    } else if (role === ROLES.TEAM_LEADER) {
      router.push("/team-leader/dashboard");
    } else if (role === ROLES.EMPLOYEE) {
      router.push(`/dashboard/employee/${userId}`);
    }
  }, [role, isAuthenticated, router]);

  return <p className="p-6">Redirecting...</p>;
}
