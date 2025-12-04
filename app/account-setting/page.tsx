"use client";

import UserLayout from "@/components/layout/UserLayout";

export default function AccountSettingsPage() {
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
      <h1 className="text-5xl font-semibold">Account Setting</h1>
      <p className="text-lg mt-2">Real-time Cryptocurrency Market</p>
    </div>

  </div>
</div>


      {/* MAIN ACCOUNT SETTINGS CARD */}
      <div className="mt-8 bg-white shadow-md rounded-xl p-6 max-w-4xl mx-auto">

        {/* Buttons */}
        <div className="flex gap-3 mb-5">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md">
            Email
          </button>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md">
            Edit Profile
          </button>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md">
            Logout
          </button>
        </div>

        {/* Details + Notifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT USER DETAILS */}
          <div>
            <p className="font-semibold text-lg">Pradeep Mewara</p>
            <p className="text-gray-600 text-sm">Name</p>

            <p className="mt-3 font-medium">mewarap18@gmail.com</p>
            <p className="text-gray-600 text-sm">Email</p>

            <p className="mt-3 font-medium">pradeepmewara</p>
            <p className="text-gray-600 text-sm">Username</p>

            <p className="mt-3 font-medium">12,100.00</p>
            <p className="text-gray-600 text-sm">Balance</p>

            <p className="mt-3 font-medium">96</p>
            <p className="text-gray-600 text-sm">Credit Score</p>

            <p className="mt-3 font-medium">Beginner</p>
            <p className="text-gray-600 text-sm">Level</p>
          </div>

          {/* RIGHT NOTIFICATIONS */}
          <div>
            <div className="bg-yellow-400 px-4 py-2 rounded-md font-semibold">
              Notifications 3
            </div>

            <div className="mt-3 space-y-3">

              <div className="border rounded p-3 shadow-sm">
                <p className="font-semibold">Your Account has been Credited</p>
                <p className="text-xs text-gray-500">1 day ago</p>
                <p className="text-sm mt-1">
                  15,100 INR added. Transaction: DRDH1LQBRLVJ …
                </p>
              </div>

              <div className="border rounded p-3 shadow-sm">
                <p className="font-semibold">Your Account has been Debited</p>
                <p className="text-xs text-gray-500">1 day ago</p>
                <p className="text-sm mt-1">
                  2,100 INR subtracted. Transaction: FNO5I5VYTC1Y …
                </p>
              </div>

              <div className="border rounded p-3 shadow-sm">
                <p className="font-semibold">Your Account has been Credited</p>
                <p className="text-xs text-gray-500">1 day ago</p>
                <p className="text-sm mt-1">
                  14,700 INR added. Transaction: AIJXZ9URNQL4 …
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </UserLayout>
  );
}
