"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

type Transaction = {
  id: number;
  dateTime: string;
  withdrawCode: string;
  amount: string;
  status: string;
  duration: string;
};

const TransactionTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const transactions: Transaction[] = [
    {
      id: 1,
      dateTime: "2025-10-20 12:45 PM",
      withdrawCode: "WD12345",
      amount: "$150",
      status: "Completed",
      duration: "2h 15m",
    },
    {
      id: 2,
      dateTime: "2025-10-19 03:10 PM",
      withdrawCode: "WD67890",
      amount: "$220",
      status: "Pending",
      duration: "—",
    },
    {
      id: 3,
      dateTime: "2025-10-18 10:05 AM",
      withdrawCode: "WD34567",
      amount: "$95",
      status: "Failed",
      duration: "—",
    },
  ];

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(
    (t) =>
      t.withdrawCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full mt-10">
      {/* Search Bar */}
      <div className="flex items-center justify-between md:mx-5 mt-5">
        <h1 className="font-semibold text-xl text-gray-900">
          Transaction History
        </h1>
        <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search By Transactions"
            className="bg-gray-100 px-4 py-2 w-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="bg-yellow-400  px-4 py-3 flex items-center justify-center cursor-pointer">
            <Search className="text-gray-800 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto overflow-y-hidden no-scrollbar mt-5 md:mx-5 pb-10">
        <table className="w-full text-[#666666] min-w-[900px]">
          <thead>
            <tr className="bg-[#393518] text-white h-[65px] border-b-8">
              <th className="px-2 py-2">Date/Time</th>
              <th className="px-2 py-2">Withdraw Code</th>
              <th className="px-2 py-2">Amount</th>
              <th className="px-2 py-2">Status</th>
              <th className="px-2 py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((t) => (
                <tr key={t.id} className="bg-[#d9d9d9] text-center h-[47px]">
                  <td className="border-b-2 border-white px-2 py-2">
                    {t.dateTime}
                  </td>
                  <td className="border-b-2 border-white px-2 py-2">
                    {t.withdrawCode}
                  </td>
                  <td className="border-b-2 border-white px-2 py-2">
                    {t.amount}
                  </td>
                  <td className="border-b-2 border-white px-2 py-2">
                    {t.status}
                  </td>
                  <td className="border-b-2 border-white px-2 py-2">
                    {t.duration}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-5 text-gray-500 bg-[#d9d9d9]"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
