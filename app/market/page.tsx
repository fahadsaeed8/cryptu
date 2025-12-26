"use client";

import DashboardLayout from "@/components/dashboardLayout";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import TradeCard from "@/components/section/trade-card";
import ChartBTC from "@/components/section/ChartBTC";
import BitcoinChart from "@/components/section/BitcoinCart";

type Trade = {
  time: string;
  asset: string;
  direction: "UP" | "DOWN";
  amount: string;
  duration: string;
  result: string;
};

const tradeData: Trade[] = [
  {
    time: "10:45 AM",
    asset: "Bitcoin (BTC)",
    direction: "UP",
    amount: "$500",
    duration: "60 sec",
    result: "Win",
  },
  {
    time: "11:05 AM",
    asset: "Ethereum (ETH)",
    direction: "DOWN",
    amount: "$300",
    duration: "120 sec",
    result: "Loss",
  },
  {
    time: "11:25 AM",
    asset: "Solana (SOL)",
    direction: "UP",
    amount: "$700",
    duration: "180 sec",
    result: "Pending",
  },
  {
    time: "11:45 AM",
    asset: "Cardano (ADA)",
    direction: "UP",
    amount: "$250",
    duration: "90 sec",
    result: "Win",
  },
  {
    time: "12:05 PM",
    asset: "BNB (BNB)",
    direction: "DOWN",
    amount: "$400",
    duration: "240 sec",
    result: "Loss",
  },
  {
    time: "12:25 PM",
    asset: "Litecoin (LTC)",
    direction: "UP",
    amount: "$350",
    duration: "60 sec",
    result: "Win",
  },
  {
    time: "12:45 PM",
    asset: "Ripple (XRP)",
    direction: "DOWN",
    amount: "$600",
    duration: "120 sec",
    result: "Pending",
  },
  {
    time: "1:05 PM",
    asset: "Tether (USDT)",
    direction: "UP",
    amount: "$1000",
    duration: "180 sec",
    result: "Win",
  },
  {
    time: "1:25 PM",
    asset: "Sui (SUI)",
    direction: "DOWN",
    amount: "$200",
    duration: "90 sec",
    result: "Loss",
  },
  {
    time: "1:45 PM",
    asset: "Toncoin (TON)",
    direction: "UP",
    amount: "$800",
    duration: "240 sec",
    result: "Pending",
  },
];

const Market = () => {
  const [language, setLanguage] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);

  const rates = {
    usdToEur: 0.92,
    btc: 43250,
    eth: 2600,
  };

  const languages = ["EN", "FR", "DE", "ES", "AR"];

  return (
    <DashboardLayout>
      <div className="bg-white   rounded-xl pb-15">
        {/* <div className="w-full relative">
          <Image
            src="/trading.jpg"
            alt="Trade Log Banner"
            width={1920}
            height={400}
            className="w-full h-[211px] rounded-xl object-cover"
          />
          <h1 className="absolute inset-0 flex items-center text-center justify-center text-white text-5xl font-bold drop-shadow-lg">
            Future Trading
          </h1>
        </div> */}
        {/* Fixed Background Section */}
        <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
          {/* Fixed Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/glassesimg.jpg')",
            }}
          ></div>

          {/* Centered Text/Image that scrolls over background */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            {/* <img
            src="/dashboardimg.png"
            alt="Overlay"
            className="w-auto h-auto"
          /> */}
            <h1 className="flex items-center text-center justify-center text-white text-5xl font-bold drop-shadow-lg">
              Future Trading
            </h1>
          </div>

          {/* Optional overlay gradient for better visibility */}
          <div className="absolute inset-0 bg-[#fdc857]/50 z-0"></div>
        </div>
        <div className="flex flex-wrap items-center gap-3 py-4 text-sm mx-2">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className=" border rounded-xl gap-5 h-[40px] w-[100px] flex items-center justify-center bg-[#D9D9D9] hover:bg-gray-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {language}
              <ChevronDown size={16} />
            </button>

            {isOpen && (
              <ul className="absolute left-0 mt-2 w-24 bg-white border rounded-md shadow-md z-10">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setLanguage(lang);
                      setIsOpen(false);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Rates */}
          <div className="flex flex-wrap gap-3 text-[#555555] text-base font-semibold">
            <span>USD/EUR: {rates.usdToEur}</span>
            <span>BTC: ${rates.btc.toLocaleString()}</span>
            <span>ETH: ${rates.eth.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-start gap-3 mx-2">
          <TradeCard />
          <div className=" w-full max-w-[630px] bg-[#d9d9d9] p-5 mb-5 rounded-xl">
            <ChartBTC />{" "}
          </div>

          {/* <BitcoinChart /> */}
        </div>
        <div className="overflow-x-auto overflow-y-hidden no-scrollbar mt-5 mx-5">
          {/* <table className="w-full text-gray-700 min-w-[900px] border-collapse">
        <thead>
          <tr className="bg-[#393518] text-white h-[65px] border-b-8 border-[#d9d9d9]">
            <th className="px-2 py-2">Time</th>
            <th className="px-2 py-2">Asset</th>
            <th className="px-2 py-2">Direction</th>
            <th className="px-2 py-2">Amount</th>
            <th className="px-2 py-2">Duration</th>
            <th className="px-2 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {tradeData.map((trade, idx) => (
            <tr
              key={idx}
              className="bg-[#d9d9d9] text-center h-[47px] hover:bg-[#cfcfcf] transition"
            >
              <td className="border-b-2 border-white px-2 py-2">{trade.time}</td>
              <td className="border-b-2 border-white px-2 py-2">
                {trade.asset}
              </td>
              <td
                className={`border-b-2 border-white px-2 py-2 font-medium ${
                  trade.direction === "UP" ? "text-green-600" : "text-red-600"
                }`}
              >
                {trade.direction}
              </td>
              <td className="border-b-2 border-white px-2 py-2">
                {trade.amount}
              </td>
              <td className="border-b-2 border-white px-2 py-2">
                {trade.duration}
              </td>
              <td
                className={`border-b-2 border-white px-2 py-2 font-medium ${
                  trade.result === "Win"
                    ? "text-green-600"
                    : trade.result === "Loss"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {trade.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Market;
