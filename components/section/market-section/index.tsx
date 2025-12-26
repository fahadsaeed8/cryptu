"use client";

import { CandlestickChart } from "lucide-react";
import React, { useEffect, useState } from "react";

type Crypto = {
  id: string;
  name: string;
  symbol: string;
  image: string;
};

const coinIds = [
  "bitcoin", // BTC
  "ethereum", // ETH
  "tether", // Tether
  "ripple", // XRP
  "solana", // SOL
  "binancecoin", // BNB
  "ethereum-classic", // ETC
  "litecoin", // LTC
  "sui", // SUI
  "cardano", // ADA
  "usd-coin", // USDC
  "the-open-network", // TON  ✔ Correct ID
  "bitshares", // BTS
];

const MarketSection: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(
            ","
          )}&sparkline=false`
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <section className="rounded-xl m-5">
      {/* Header */}
      <div className="flex items-center bg-[#fdc857] border border-x-0 border-[#8E8E93] rounded-[12px] h-[52px] px-5 gap-2">
        <CandlestickChart className="text-gray-800" />
        <h1 className="text-[24px] text-gray-800 font-medium">Market</h1>
      </div>

      <div className="mx-6">
        {loading ? (
          <div className="text-center text-[#555555] py-10 text-lg font-medium">
            Loading Market Data...
          </div>
        ) : (
          cryptoData.map((coin, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-300"
            >
              <div className="flex items-center gap-3">
                <img
                  src={coin.image}
                  className="w-[40px] h-[40px] rounded-full object-cover"
                  alt={coin.name}
                />
                <h1 className="text-[#555555] text-[18px] font-medium">
                  {coin.name}
                </h1>
              </div>

              <h1 className="text-[#555555] text-[18px] font-medium uppercase">
                {coin.symbol}
              </h1>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MarketSection;
