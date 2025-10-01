import React from "react";
import Sidebar from "../common/sidebar";
import Navbar from "../common/navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main Content Area */}
      <div className="w-full flex flex-col overflow-x-hidden">
        <Navbar />

        <main className="w-full h-[calc(100vh-50px)] p-2 md:p-4 overflow-y-auto scrollbar-hide overflow-x-hidden bg-[#F1F1F1]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
