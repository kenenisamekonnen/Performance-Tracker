'use client'

import Link from 'next/link'
import { Users, UserCog } from 'lucide-react'

export default function ManageUsersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col items-center px-6 py-12">
      <h1 className="text-3xl font-bold text-indigo-800 mb-8">Manage Users</h1>
      <p className="text-gray-600 mb-10">Choose a category to manage accounts.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Employees */}
        <Link
          href="/admin/dashboard/manage-users/employees"
          className="group flex flex-col items-center justify-center bg-white border border-indigo-200 rounded-2xl p-10 shadow hover:shadow-xl hover:-translate-y-2 transition-all"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition">
            <Users size={36} className="text-indigo-700" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-indigo-800">Employees</h2>
          <p className="text-gray-600 mt-2 text-center">View and manage employee accounts, tasks, and performance.</p>
        </Link>

        {/* Team Leaders */}
        <Link
          href="/team-leader/team-leader-list"
          className="group flex flex-col items-center justify-center bg-white border border-green-200 rounded-2xl p-10 shadow hover:shadow-xl hover:-translate-y-2 transition-all"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition">
            <UserCog size={36} className="text-green-700" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-green-800">Team Leaders</h2>
          <p className="text-gray-600 mt-2 text-center">Manage team leader accounts and oversee assigned teams.</p>
        </Link>
      </div>
    </main>
  )
}
