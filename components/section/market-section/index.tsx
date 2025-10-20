"use client";

import React, { useEffect, useState } from "react";

type Crypto = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

const MarketSection: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch real-time crypto data from CoinGecko API
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
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
    <section className="border border-[#8E8E93] border-t-0 rounded-xl m-5">
      {/* Header */}
      <div className="flex items-center border border-x-0 border-[#8E8E93] rounded-[12px] h-[52px] px-5 gap-2">
        <img src="/market.png" alt="market icon" />
        <h1 className="text-[24px] text-[#555555] font-medium">Market</h1>
      </div>

      {/* Content */}
      <div className="mx-6">
        {loading ? (
          <div className="text-center text-[#555555] py-10 text-lg font-medium">
            Loading Market Data...
          </div>
        ) : cryptoData.length === 0 ? (
          <div className="text-center text-[#555555] py-10 text-lg font-medium">
            No Data Available
          </div>
        ) : (
          cryptoData.map((item, index) =>
            index % 2 === 0 ? (
              <div
                key={index}
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  index < cryptoData.length - 1
                    ? "border-b border-gray-400"
                    : ""
                }`}
              >
                {[item, cryptoData[index + 1]].map(
                  (coin, subIndex) =>
                    coin && (
                      <div
                        key={subIndex}
                        className="flex items-center gap-2 w-full xl:w-[487px] py-2"
                      >
                        <img
                          src={coin.image}
                          className="w-[50px] h-[50px] hidden md:block rounded-full object-cover"
                          alt={coin.name}
                        />
                        <div className="flex justify-between w-full">
                          <div className="flex flex-col">
                            <h1 className="text-[#555555] text-[20px] leading-none font-medium">
                              {coin.name}
                            </h1>
                            <h1 className="text-[#555555] mt-1 text-[16px] leading-none font-medium uppercase">
                              {coin.symbol}
                            </h1>
                          </div>
                          <div className="flex flex-col items-end mr-4">
                            <h1 className="text-[#555555] text-[20px] leading-none font-medium">
                              ${coin.current_price.toLocaleString()}
                            </h1>
                            <h1
                              className={`text-[16px] leading-none font-medium ${
                                coin.price_change_percentage_24h >= 0
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {coin.price_change_percentage_24h.toFixed(2)}%
                            </h1>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : null
          )
        )}
      </div>
    </section>
  );
};

export default MarketSection;
