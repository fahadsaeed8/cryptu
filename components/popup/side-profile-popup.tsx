"use client";

import React from "react";
import { Settings, Lock, LogOut, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactPopUp from "../common/react-popup";
import { useRouter } from "next/navigation";

const SideProfilePopUp = () => {
  const menuItems = [
    {
      id: 1,
      label: "Account Settings",
      description: "Manage your account",
      icon: <Settings size={16} className="text-white" />,
      link: "/account-setting",
    },
    {
      id: 2,
      label: "Change Password",
      description: "Update your password",
      icon: <Lock size={16} className="text-white" />,
      link: "/change-password",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const popupContent = (close: () => void) => (
    <div className="w-[260px] rounded-[4px] shadow-lg bg-white border border-gray-200 mt-4 overflow-hidden">
      <div className="px-4 py-2 font-semibold text-sm">
        Account
      </div>
      <div>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            onClick={close}
            className="flex items-center gap-3 px-4 py-2 transition-colors duration-150 cursor-pointer hover:bg-gray-100 text-black"
          >
            <div className="min-w-10 max-w-10 min-h-10 max-h-10 bg-gray-600 rounded-full flex justify-center items-center">
              {item.icon}
            </div>
            <div className="flex flex-col text-xs">
              <span className="font-medium">{item.label}</span>
              <span className="text-gray-500 font-normal">{item.description}</span>
            </div>
          </Link>
        ))}
        <button
          onClick={() => {
            close();
            handleLogout();
          }}
          className="flex items-center gap-3 px-4 py-2 transition-colors duration-150 cursor-pointer w-full hover:bg-gray-100 text-red-600 font-medium"
        >
          <div className="min-w-10 max-w-10 min-h-10 max-h-10 bg-gray-600 rounded-full flex justify-center items-center text-white">
            <LogOut size={16} />
          </div>
          <span className="text-xs">Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <ReactPopUp popupContent={popupContent}>
      <Image
        className="cursor-pointer"
        src={"/Vector.svg"}
        width={10}
        height={10}
        alt="profile menu icon"
      />
    </ReactPopUp>
  );
};

export default SideProfilePopUp;
