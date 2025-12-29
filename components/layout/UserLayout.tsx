"use client";

import Sidebar from "@/components/common/sidebar";
import Navbar from "@/components/common/navbar";
import React from "react";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-full flex flex-col overflow-x-hidden">
        <Navbar />

        {/* Page Content */}
        <main className="w-full h-[calc(100vh-65px)] p-5 overflow-y-auto scrollbar-hide overflow-x-hidden bg-[#F1F1F1]">
          {children}
        </main>
      </div>
    </div>
  );
}
