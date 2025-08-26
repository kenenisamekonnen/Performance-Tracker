'use client';

import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import AdminstractureNavBar from "@/app/employee/shared/admisteratur-navbar/NavbarAdmin";

// Sample team data
const TeamMembers = [
  {
    id: 1,
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    status: "Active",
    tasks: ["Fix Navbar", "Update Login Page"],
  },
  {
    id: 2,
    fullName: "Bob Smith",
    role: "Backend Developer",
    status: "Inactive",
    tasks: ["Optimize DB Queries"],
  },
  {
    id: 3,
    fullName: "Carol Lee",
    role: "UI/UX Designer",
    status: "Active",
    tasks: ["Create Dashboard Mockup"],
  },
];

export default function TeamLeaderDashboard() {
  const [members, setMembers] = useState(TeamMembers);

  // Toggle Active / Inactive
  const toggleStatus = (id) => {
    setMembers(
      members.map((m) =>
        m.id === id ? { ...m, status: m.status === "Active" ? "Inactive" : "Active" } : m
      )
    );
  };

  // Assign new task
  const assignTask = (id) => {
    const task = prompt("Enter new task:");
    if (task) {
      setMembers(
        members.map((m) =>
          m.id === id ? { ...m, tasks: [...m.tasks, task] } : m
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-[#D9D9D9] w-full h-56 flex flex-col justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full">
          <AdminstractureNavBar />
        </div>
        <h1 className="text-center text-2xl font-semibold text-black mt-16">
          Team Leader Dashboard
        </h1>
      </div>

      {/* Team Table */}
      <div className="px-4 mt-6">
        <Card className="p-4 shadow-md rounded-lg bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm text-left">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 font-semibold">Name</th>
                  <th className="px-4 py-2 font-semibold">Role</th>
                  <th className="px-4 py-2 font-semibold">Status</th>
                  <th className="px-4 py-2 font-semibold">Tasks</th>
                  <th className="px-4 py-2 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{member.fullName}</td>
                    <td className="px-4 py-2">{member.role}</td>
                    <td>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          member.status === "Active"
                            ? "text-green-700 bg-green-100"
                            : "text-red-700 bg-red-100"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <ul className="list-disc list-inside">
                        {member.tasks.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => toggleStatus(member.id)}
                        className="text-blue-600 hover:underline"
                      >
                        Toggle Status
                      </button>
                      <button
                        onClick={() => assignTask(member.id)}
                        className="text-green-600 hover:underline"
                      >
                        Assign Task
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
