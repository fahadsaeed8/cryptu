"use client";

import DashboardLayout from "@/components/dashboardLayout";
import Image from "next/image";

type RunningOrder = {
  sn: number;
  cryptoCurrency: string;
  amount: string;
  direction: "UP" | "DOWN";
  result: "Win" | "Loss" | "Pending";
  status: "Running" | "Completed" | "Cancelled";
  date: string;
};

const runningOrders: RunningOrder[] = [
  {
    sn: 1,
    cryptoCurrency: "Bitcoin (BTC)",
    amount: "$500",
    direction: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-10-19",
  },
  {
    sn: 2,
    cryptoCurrency: "Ethereum (ETH)",
    amount: "$300",
    direction: "DOWN",
    result: "Loss",
    status: "Completed",
    date: "2025-10-19",
  },
  {
    sn: 3,
    cryptoCurrency: "Cardano (ADA)",
    amount: "$250",
    direction: "UP",
    result: "Pending",
    status: "Running",
    date: "2025-10-20",
  },
  {
    sn: 4,
    cryptoCurrency: "Solana (SOL)",
    amount: "$400",
    direction: "DOWN",
    result: "Loss",
    status: "Completed",
    date: "2025-10-18",
  },
  {
    sn: 5,
    cryptoCurrency: "BNB (BNB)",
    amount: "$600",
    direction: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-10-20",
  },
  {
    sn: 6,
    cryptoCurrency: "XRP (XRP)",
    amount: "$450",
    direction: "UP",
    result: "Pending",
    status: "Running",
    date: "2025-10-21",
  },
  {
    sn: 7,
    cryptoCurrency: "Tether (USDT)",
    amount: "$700",
    direction: "DOWN",
    result: "Win",
    status: "Completed",
    date: "2025-10-17",
  },
];

type ClosedOrder = {
  sn: number;
  cryptoCurrency: string;
  amount: string;
  direction: "UP" | "DOWN";
  leverage: string;
  result: "Win" | "Loss";
  profitLoss: string;
  status: "Closed" | "Cancelled" | "Completed";
  date: string;
};

const closedOrders: ClosedOrder[] = [
  {
    sn: 1,
    cryptoCurrency: "Bitcoin (BTC)",
    amount: "$500",
    direction: "UP",
    leverage: "5x",
    result: "Win",
    profitLoss: "+$120",
    status: "Completed",
    date: "2025-10-18",
  },
  {
    sn: 2,
    cryptoCurrency: "Ethereum (ETH)",
    amount: "$350",
    direction: "DOWN",
    leverage: "10x",
    result: "Loss",
    profitLoss: "-$90",
    status: "Closed",
    date: "2025-10-19",
  },
  {
    sn: 3,
    cryptoCurrency: "Cardano (ADA)",
    amount: "$200",
    direction: "UP",
    leverage: "3x",
    result: "Win",
    profitLoss: "+$45",
    status: "Completed",
    date: "2025-10-20",
  },
  {
    sn: 4,
    cryptoCurrency: "BNB (BNB)",
    amount: "$600",
    direction: "DOWN",
    leverage: "8x",
    result: "Loss",
    profitLoss: "-$150",
    status: "Closed",
    date: "2025-10-17",
  },
  {
    sn: 5,
    cryptoCurrency: "Solana (SOL)",
    amount: "$450",
    direction: "UP",
    leverage: "6x",
    result: "Win",
    profitLoss: "+$100",
    status: "Completed",
    date: "2025-10-20",
  },
  {
    sn: 6,
    cryptoCurrency: "XRP (XRP)",
    amount: "$400",
    direction: "DOWN",
    leverage: "7x",
    result: "Loss",
    profitLoss: "-$80",
    status: "Closed",
    date: "2025-10-18",
  },
  {
    sn: 7,
    cryptoCurrency: "Tether (USDT)",
    amount: "$550",
    direction: "UP",
    leverage: "4x",
    result: "Win",
    profitLoss: "+$95",
    status: "Completed",
    date: "2025-10-19",
  },
];

export default function TradeLog() {
  return (
    <DashboardLayout>
      <div className="  flex flex-col rounded-xl items-center bg-white">
        {/* Header Banner
        <div className="w-full relative">
          <Image
            src="/trade-banner.svg"
            alt="Trade Log Banner"
            width={1920}
            height={400}
            className="w-full h-[211px] rounded-xl object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold drop-shadow-lg">
            Trade Log
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
            <h1 className=" flex items-center justify-center text-white text-5xl font-bold drop-shadow-lg">
              Trade Log
            </h1>
          </div>

          {/* Optional overlay gradient for better visibility */}
          <div className="absolute inset-0 bg-[#fdc857]/50 z-0"></div>
        </div>

        <div className="w-full max-w-6xl p-2 md:p-4">
          {/* Running Order Section */}
          <div className="mb-6">
            <h2 className=" bg-[#d9d9d9] w-fit rounded-[12px] text-[20px] px-2 py-1 font-semibold mb-[7px]">
              Running Order
            </h2>
            <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
              <table className="w-full text-[#555555] min-w-[900px]">
                <thead>
                  <tr className="bg-[#393518] text-white h-[65px] border-b-8">
                    <th className="px-2 py-2 ">S.N</th>
                    <th className="px-2 py-2 ">Crypto Currency</th>
                    <th className="px-2 py-2 ">Amount</th>
                    <th className="px-2 py-2 ">Direction</th>
                    <th className="px-2 py-2 ">Result</th>
                    <th className="px-2 py-2 ">Status</th>
                    <th className="px-2 py-2 ">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {runningOrders.map((order) => (
                    <tr
                      key={order.sn}
                      className="bg-[#d9d9d9] text-center h-[47px]"
                    >
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.sn}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.cryptoCurrency}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.amount}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.direction}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.result}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.status}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Closed Order Section */}
          <div className="mb-10">
            <h2 className="bg-[#d9d9d9] w-fit rounded-[12px] text-[20px] px-2 py-1 font-semibold mb-[7px]">
              Closed Order
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[#555555] min-w-[900px]">
                <thead>
                  <tr className="bg-[#393518] text-white h-[65px] border-b-8">
                    <th className="px-2 py-2">S.N</th>
                    <th className="px-2 py-2">Crypto Currency</th>
                    <th className="px-2 py-2">Amount</th>
                    <th className="px-2 py-2">Direction</th>
                    <th className="px-2 py-2">Leverage</th>
                    <th className="px-2 py-2">Result</th>
                    <th className="px-2 py-2">Profit/Loss</th>
                    <th className="px-2 py-2">Status</th>
                    <th className="px-2 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {closedOrders.map((order) => (
                    <tr
                      key={order.sn}
                      className="bg-[#d9d9d9] text-center h-[47px]"
                    >
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.sn}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.cryptoCurrency}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.amount}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.direction}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.leverage}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.result}
                      </td>
                      <td
                        className={`border-b-2 border-white px-2 py-2 font-semibold ${
                          order.profitLoss.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {order.profitLoss}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.status}
                      </td>
                      <td className="border-b-2 border-white px-2 py-2">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
