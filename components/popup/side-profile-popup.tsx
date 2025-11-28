"use client";
import React from "react";
import { Settings, Lock, LogOut } from "lucide-react";
import Image from "next/image";
import ReactPopUp from "../common/react-popup";
import { useRouter } from "next/navigation";

const SideProfilePopUp = () => {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      message: "Profile Settings",
      avatar: <Settings size={16} className="text-white" />,
    },
    {
      id: 2,
      message: "Change Password",
      avatar: <Lock size={16} className="text-white" />,
    },
    {
      id: 3,
      message: "Logout",
      avatar: <LogOut size={16} className="text-white" />,
    },
  ];

  const popupContent = (close: () => void) => (
    <div className="w-[240px] rounded-[4px] shadow-lg bg-white border border-gray-200 mt-4 overflow-hidden">
      {notifications.map((msg) => (
        <div
          key={msg.id}
          onClick={() => {
            close();
            if (msg.message === "Logout") {
              console.log("Logging out...");
              router.push("/auth/login"); // redirect to login page
            }
          }}
          className="flex items-center gap-3 px-4 py-2 cursor-pointer border-b border-b-gray-300 hover:bg-gray-300"
        >
          <div className="min-w-10 max-w-10 min-h-10 max-h-10 bg-gray-600 rounded-full flex justify-center items-center">
            {msg.avatar}
          </div>
          <div className="flex flex-col text-xs">
            <span className="font-medium">{msg.message}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <ReactPopUp popupContent={popupContent}>
      <Image
        className="cursor-pointer"
        src={"/Vector.svg"}
        width={10}
        height={10}
        alt=""
      />
    </ReactPopUp>
  );
};

export default SideProfilePopUp;
