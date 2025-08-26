'use client'

import { Card } from '@/components/ui/card'
import React, { useState } from 'react'
import AdminstractureNavBar from '../shared/admisteratur-navbar/NavbarAdmin'

// Sample employee data
const initialEmployeeList = [
  {
    id: 1,
    fullName: 'Alice Johnson',
    department: 'Computer Science',
    position: 'Developer',
    jobType: 'Full-Time',
    email: 'alice.johnson@example.com',
    phone: '123-456-7890',
    status: 'Active',
  },
  {
    id: 2,
    fullName: 'Bob Smith',
    department: 'Mathematics',
    position: 'Analyst',
    jobType: 'Part-Time',
    email: 'bob.smith@example.com',
    phone: '987-654-3210',
    status: 'Inactive',
  },
  {
    id: 3,
    fullName: 'Carol Lee',
    department: 'Physics',
    position: 'Researcher',
    jobType: 'Full-Time',
    email: 'carol.lee@example.com',
    phone: '555-123-4567',
    status: 'Active',
  },
]

export default function EmployeeList() {
  const [employees, setEmployees] = useState(initialEmployeeList)
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)

  // Toggle activation
  const toggleStatus = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? { ...emp, status: emp.status === 'Active' ? 'Inactive' : 'Active' }
          : emp
      )
    )
  }

  // Open feedback modal
  const openFeedback = (employee) => {
    setSelectedEmployee(employee)
    setFeedback('')
    setShowFeedbackModal(true)
  }

  // Save feedback (later connect to backend)
  const saveFeedback = () => {
    alert(`Feedback for ${selectedEmployee.fullName}: ${feedback}`)
    setShowFeedbackModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#D9D9D9] w-full h-56 flex flex-col justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full">
          <AdminstractureNavBar />
        </div>
        <h1 className="text-center text-2xl font-semibold text-black mt-16">
          Employee Data List
        </h1>
      </div>

      {/* Table */}
      <div className="px-4 mt-6">
        <Card className="p-4 shadow-md rounded-lg bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm text-left">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 font-semibold">Full Name</th>
                  <th className="px-4 py-2 font-semibold">Department</th>
                  <th className="px-4 py-2 font-semibold">Position</th>
                  <th className="px-4 py-2 font-semibold">Job Type</th>
                  <th className="px-4 py-2 font-semibold">Email</th>
                  <th className="px-4 py-2 font-semibold">Phone No</th>
                  <th className="px-4 py-2 font-semibold">Status</th>
                  <th className="px-4 py-2 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{emp.fullName}</td>
                    <td className="px-4 py-2">{emp.department}</td>
                    <td className="px-4 py-2">{emp.position}</td>
                    <td className="px-4 py-2">{emp.jobType}</td>
                    <td className="px-4 py-2">{emp.email}</td>
                    <td className="px-4 py-2">{emp.phone}</td>
                    <td>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          emp.status === 'Active'
                            ? 'text-green-700 bg-green-100'
                            : 'text-red-700 bg-red-100'
                        }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex gap-2">
                      {/* Toggle Active/Inactive */}
                      <button
                        onClick={() => toggleStatus(emp.id)}
                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 text-xs"
                      >
                        {emp.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </button>

                      {/* Feedback */}
                      <button
                        onClick={() => openFeedback(emp)}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 text-xs"
                      >
                        Feedback
                      </button>

                      {/* View Full Info */}
                      <button
                        onClick={() => setSelectedEmployee(emp)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-xs"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Feedback Modal */}
      {showFeedbackModal && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Feedback for {selectedEmployee.fullName}
            </h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4"
              rows={4}
              placeholder="Write feedback here..."
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="px-4 py-2 bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={saveFeedback}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Full Details Modal */}
      {selectedEmployee && !showFeedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Employee Details</h2>
            <p><strong>Name:</strong> {selectedEmployee.fullName}</p>
            <p><strong>Department:</strong> {selectedEmployee.department}</p>
            <p><strong>Position:</strong> {selectedEmployee.position}</p>
            <p><strong>Job Type:</strong> {selectedEmployee.jobType}</p>
            <p><strong>Email:</strong> {selectedEmployee.email}</p>
            <p><strong>Phone:</strong> {selectedEmployee.phone}</p>
            <p><strong>Status:</strong> {selectedEmployee.status}</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedEmployee(null)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
