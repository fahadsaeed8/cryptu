"use client";

import React from "react";
import { List, Lock, Settings, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactPopUp from "../common/react-popup";

const SideProfilePopUp = () => {
  const menuItems = [
    {
      id: 1,
      label: "Account Settings",
      icon: <Settings size={16} className="text-white" />,
      link: "/account-setting",
    },
    {
      id: 2,
      label: "Change Password",
      icon: <Lock size={16} className="text-white" />,
      link: "/change-password",
    },
    {
      id: 3,
      label: "TO Do List",
      icon: <List size={16} className="text-white" />,
      link: "/account/todo",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const popupContent = (close: () => void) => (
    <div className="w-[240px] rounded-[8px] shadow-lg bg-white border border-gray-100 mt-4 overflow-hidden">
      <div>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            onClick={close}
            className="flex items-center gap-3 px-4 py-3 transition-colors duration-150 cursor-pointer border-b border-b-gray-100 hover:bg-blue-50 text-black"
          >
            <div className="min-w-9 max-w-9 min-h-9 max-h-9 bg-blue-100 rounded-full flex justify-center items-center text-blue-600">
              {item.icon}
            </div>

            <div className="flex flex-col text-xs">
              <span className="font-medium text-gray-800">{item.label}</span>
            </div>
          </Link>
        ))}
        <button
          onClick={() => {
            close();
            handleLogout();
          }}
          className="flex items-center gap-3 px-4 py-3 transition-colors duration-150 cursor-pointer w-full hover:bg-red-50 text-red-600 font-medium"
        >
          <div className="min-w-9 max-w-9 min-h-9 max-h-9 bg-red-100 rounded-full flex justify-center items-center">
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
