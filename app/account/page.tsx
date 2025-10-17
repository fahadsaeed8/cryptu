// import DashboardLayout from "@/components/dashboardLayout";
// import React from "react";
// import { FaUser } from "react-icons/fa";

// const Account = () => {
//   interface ProfileField {
//     label: string;
//     value: string;
//   }

//   const profileData: ProfileField[] = [
//     { label: "Name", value: "John Doe" },
//     { label: "Email", value: "test@gmail.com" },
//     { label: "Username", value: "@johndoe" },
//     { label: "Balance", value: "INR 345" },
//     { label: "Credit Score", value: "2345" },
//     { label: "Level", value: "Premium" },
//   ];
//   return (
//     <DashboardLayout>
//       <div className=" bg-white h-screen rounded-xl">
//         <div className=" p-6">
//           <h2 className="mb-6 text-[32px] font-medium text-[#555555]">
//             User Profile
//           </h2>

//           <div className="space-y-4">
//             {profileData.map((item, idx) => (
//               <div key={idx} className="flex items-center space-x-3">
//                 <FaUser className="w-[21px] h-[21px]" />
//                 <div>
//                   <p className=" text-[14px] font-medium text-[#555555]">
//                     {item.label}
//                   </p>
//                   <p className=" text-xl font-medium text-[#555555]">
//                     {item.value}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Account;
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/dashboardLayout";
import {
  CornerRightUp,
  Mail,
  Star,
  User2,
  Wallet,
} from "lucide-react";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<"email" | "edit" | "none">(
    "none"
  );
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  // ✅ Email Form Submit
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email updated:", email);
    alert(`Email updated successfully to: ${email}`);
    setEmail("");
    setActiveSection("none");
  };

  // ✅ Edit Profile Form Submit
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", { firstName, lastName });
    alert(`Profile updated: ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
    setActiveSection("none");
  };

  // ✅ Logout Function
  const handleLogout = () => {
    console.log("Logging out...");
    router.push("/login");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screenflex items-center justify-center">
        <div className="bg-white w-full max-w-5xl rounded-xl shadow-md p-6">
          <div className=" mb-7">
            <h1 className="text-[#6c757d] font-semibold text-3xl">User Profile</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Info Section */}
            <div className="w-full md:w-1/3 space-y-4 ">
              <div>
                <p className="text-sm text-[#6c757d] flex items-center gap-x-1">
                  <User2 className=" w-3" /> Name
                </p>
                <h2 className="text-[#6c757d] font-bold text-lg">Babar Ali</h2>
              </div>

              <div>
                <p className="text-sm text-[#6c757d] flex items-center gap-x-1">
                  <Mail className=" w-3" /> Email
                </p>
                <p className="text-[#6c757d] font-semibold">
                  babarmahar599@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-[#6c757d] flex items-center gap-x-1">
                  <User2 className=" w-3" /> Username
                </p>
                <p className="text-[#6c757d] font-semibold">babarali</p>
              </div>

              <div>
                <p className="text-sm text-[#6c757d] flex items-center gap-x-1">
                  <Wallet className=" w-3" /> Balance
                </p>
                <p className="text-[#6c757d] font-semibold">0.00</p>
              </div>

              <div>
                <p className="text-sm text-[#6c757d] flex items-center gap-x-1">
                  <Star className=" fill-gray-500 w-3" /> Credit Score
                </p>
                <p className="text-[#6c757d] font-semibold">100</p>
              </div>

              <div>
                <p className="text-sm text-[#6c757d] flex items-center gap-x-1">
                  <CornerRightUp className=" w-3" /> Level
                </p>
                <p className="text-[#6c757d] font-semibold">Pro</p>
              </div>
            </div>

            {/* Right Side Section */}
            <div className="w-full md:w-2/3 space-y-6">
              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    setActiveSection(activeSection === "email" ? "none" : "email")
                  }
                  className="bg-[#fdc857] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                >
                  Email
                </button>

                <button
                  onClick={() =>
                    setActiveSection(activeSection === "edit" ? "none" : "edit")
                  }
                  className="bg-[#fdc857] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                >
                  Edit Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-[#fdc857] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                >
                  Logout
                </button>
              </div>

              {/* Dynamic Form Section */}
              {activeSection === "email" && (
                <div>
                  <form onSubmit={handleEmailSubmit} className="space-y-3">
                    <label className="font-semibold mb-3 text-[#6c757d]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter new email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-2 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                    <div>
                      <button
                        type="submit"
                        className="bg-[#ffd67e] w-full text-gray-700 cursor-pointer font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeSection === "edit" && (
                <div>
                  <form
                    onSubmit={handleEditSubmit}
                    className="space-y-3 grid grid-cols-1 lg:grid-cols-2 gap-x-3"
                  >
                    <div>
                      <label
                        htmlFor=""
                        className=" font-semibold mb-3 text-[#6c757d]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-gray-100 border border-gray-300 rounded-md px-2 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className=" font-semibold mb-3 text-[#6c757d]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-gray-100 border border-gray-300 rounded-md px-2 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                      />
                    </div>
                    <div className=" w-full col-span-full">
                      <button
                        type="submit"
                        className="bg-[#ffd67e] w-full text-gray-700 cursor-pointer font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Notification Box */}
              <div className="bg-[#fdc857] rounded-t-md px-4 py-2 flex items-center justify-between">
                <h3 className="font-semibold text-white">Notifications</h3>
                <span className="bg-white text-yellow-500 text-sm font-semibold px-2 rounded-full">
                  0
                </span>
              </div>
              <div className="bg-white rounded-b-md shadow-md p-6 flex flex-col items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <p>No notifications found</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
