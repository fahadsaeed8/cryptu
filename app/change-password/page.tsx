"use client";

import UserLayout from "@/components/layout/UserLayout";
import { useState } from "react";

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password change submitted:", formData);
    alert("Password changed successfully!");
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <UserLayout>
      {/* HERO IMAGE SECTION */}
      <div className="bg-white rounded-xl pb-10">
        <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/glassesimg.jpg')",
            }}
          ></div>

          {/* Yellow overlay */}
          <div className="absolute inset-0 bg-[#fdc857]/50 z-[1]"></div>

          {/* Black tint overlay */}
          <div className="absolute inset-0 bg-black/30 z-[2]"></div>

          {/* HERO TEXT */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-[3]">
            <h1 className="text-5xl font-semibold">Change Password</h1>
            <p className="text-lg mt-2">Update your account password</p>
          </div>
        </div>
      </div>

      {/* MAIN CHANGE PASSWORD CARD */}
      <div className="mt-8 bg-white shadow-md rounded-xl p-8 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword.current ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your current password"
              />
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your new password"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Password must be at least 8 characters long
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword.confirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your new password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Update Password
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                })
              }
              className="flex-1 bg-gray-300 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-400 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-sm text-blue-800 font-medium">
            ✓ For your security, use a strong password with a mix of uppercase, lowercase, numbers and special characters
          </p>
        </div>
      </div>
    </UserLayout>
  );
}
