"use client";

import Sidebar from "@/components/common/sidebar";
import Navbar from "@/components/common/navbar";
import React from "react";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#F1F1F1] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />

        {/* Page Content */}
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
