"use client";

import React, { useState } from "react";
import { X, AlertCircle } from "lucide-react";

const TotalAssetsSection: React.FC = () => {
  const [isRechargeOpen, setIsRechargeOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  // Withdraw form state
  const [bankDetails, setBankDetails] = useState({
    accountHolder: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
  });
  const [amount, setAmount] = useState("");

  const handleBankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#D9D9D9] rounded-md p-4 w-full max-w-[700px] min-h-[250px] h-full mx-auto text-center shadow my-4">
      {/* Header */}
      <h2 className="text-2xl font-medium text-[#555555]">Total Assets</h2>
      <p className="text-2xl leading-none md:text-[48px] font-medium text-[#555555] mt-2">
        INR 0.00
      </p>

      {/* Buttons */}
      <div className="flex md:flex-row flex-col items-center justify-center gap-4 mt-3">
        <button
          onClick={() => setIsRechargeOpen(true)}
          className="max-w-[195px] cursor-pointer h-[40px] w-full rounded-full border-[2px] border-[#555555] text-[#555555] text-base font-medium hover:bg-gray-100"
        >
          Recharge
        </button>
        <button
          onClick={() => setIsWithdrawOpen(true)}
          className="max-w-[195px] cursor-pointer h-[40px] w-full rounded-full border-[2px] border-[#555555] text-[#555555] text-base font-medium hover:bg-gray-100"
        >
          Withdraw of Currency
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-[#8E8E93] mt-3 max-w-xl mx-auto"></div>
      <div className="pt-1 grid grid-cols-3">
        <div className="border-r border-[#8E8E93]">
          <p className="text-base font-medium text-[#555555]">Total Balance</p>
          <p className="font-medium text-xl text-[#555555]">INR 0.00</p>
        </div>
        <div className="border-r border-[#8E8E93]">
          <p className="text-base font-medium text-[#555555]">Frozen Balance</p>
          <p className="font-medium text-xl text-[#555555]">INR 0.00</p>
        </div>
        <div>
          <p className="text-base font-medium text-[#555555]">
            Available Balance
          </p>
          <p className="font-medium text-xl text-[#555555]">INR 0.00</p>
        </div>
      </div>

      {/* ==================== RECHARGE MODAL ==================== */}
      {isRechargeOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#1E1E1E] text-white rounded-lg shadow-lg w-[90%] max-w-[400px] relative p-6 border border-[#333]">
            <button
              onClick={() => setIsRechargeOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="flex justify-center mb-3">
              <AlertCircle className="text-yellow-400" size={40} />
            </div>

            <h2 className="text-lg font-semibold text-center">
              Only Admin can recharge your account
            </h2>
            <p className="text-sm text-gray-400 text-center mt-2">
              Please contact the administrator for account recharge
            </p>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsRechargeOpen(false)}
                className="bg-[#FFD85D] text-black px-6 py-2 rounded-md font-medium hover:bg-[#ffcc33]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== WITHDRAW MODAL ==================== */}
      {isWithdrawOpen && (
        <div
          onClick={() => setIsWithdrawOpen(false)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3 scrollbar-hide overflow-y-auto"
        >
          {/* Stop propagation to prevent closing when clicking inside modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg w-full max-w-[750px] relative p-6 text-left mt-[300px] lg:mt-[200px]"
          >
            {/* Close Icon */}
            <button
              onClick={() => setIsWithdrawOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <h2 className="text-lg font-semibold text-[#555555]">Withdraw</h2>
            <p className="text-center text-[#555555] mt-1 text-sm">
              Available Balance
            </p>
            <p className="text-center text-[#555555] font-semibold text-lg">
              INR 0.00
            </p>

            {/* Bank Detail */}
            <div className="mt-4">
              <h3 className="font-medium text-[#555555] mb-2">Bank Detail</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  name="accountHolder"
                  value={bankDetails.accountHolder}
                  onChange={handleBankChange}
                  placeholder="Account Holder name"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                />
                <input
                  type="text"
                  name="accountNumber"
                  value={bankDetails.accountNumber}
                  onChange={handleBankChange}
                  placeholder="Bank Account Number"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                />
                <input
                  type="text"
                  name="bankName"
                  value={bankDetails.bankName}
                  onChange={handleBankChange}
                  placeholder="Bank Name"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                />
                <input
                  type="text"
                  name="ifsc"
                  value={bankDetails.ifsc}
                  onChange={handleBankChange}
                  placeholder="IFSC Number"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                />
                <button className="w-full cursor-pointer bg-[#FFD85D] text-black py-2 rounded-md font-medium hover:bg-[#ffcc33]">
                  Save Bank detail
                </button>
              </div>
            </div>

            {/* Withdraw Section */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <input type="radio" checked readOnly />
                <span className="text-[#555555] text-sm font-medium">
                  Bank Transfer
                </span>
                <img
                  src="/cryptoindia.jpeg"
                  alt="bank"
                  className="w-[100px] object-contain"
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <label className="text-[#555555] text-sm font-medium">
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="00.00"
                  className="border border-gray-300 rounded-md p-2 w-full max-w-[150px] text-sm focus:outline-none"
                />
                <span className="text-[#555555] text-sm">INR</span>
              </div>

              <div className="text-sm text-[#555555] space-y-1">
                <p>
                  Limit{" "}
                  <span className="float-right">1.00INR - 1,000,000.00INR</span>
                </p>
                <p>
                  Processing Charge{" "}
                  <span className="float-right">0.00 INR</span>
                </p>
                <p>
                  Receivable <span className="float-right">0.00 INR</span>
                </p>
                <p>
                  Conversion{" "}
                  <span className="float-right">1 INR = 1.00 RS</span>
                </p>
                <p>
                  In RS <span className="float-right">{amount || "0.00"}</span>
                </p>
              </div>

              <button className="w-full cursor-pointer bg-[#FFD85D] text-black py-2 rounded-md font-medium mt-4 hover:bg-[#ffcc33]">
                Confirm Withdraw
              </button>

              <p className="text-xs text-[#555555] text-center mt-2">
                Safely withdraw your funds using our highly secure process and
                various withdrawal method
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalAssetsSection;
