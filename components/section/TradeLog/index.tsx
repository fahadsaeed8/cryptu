"use clint";

import BitcoinChart from "../BitcoinCart";
import MarketSection from "../market-section";

export default function TradeLog() {
  const cryptoData = [
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$0.62",
    change: "+2.10",
    image: "/ada.png",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$245,450",
    change: "+3.20",
    image: "/bitcoin.png",
  },
  {
    name: "BNB",
    symbol: "BNB",
    price: "$310.80",
    change: "+1.45",
    image: "/bnb.png",
  },
  {
    name: "BitShares",
    symbol: "BTS",
    price: "$0.019",
    change: "-0.25",
    image: "/bts.png",
  },
  {
    name: "Ethereum Classic",
    symbol: "ETC",
    price: "$24.50",
    change: "+0.90",
    image: "/etc.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$12,300",
    change: "+1.50",
    image: "/eth.png",
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    price: "$95.25",
    change: "+0.80",
    image: "/ltc.png",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$145.60",
    change: "+4.00",
    image: "/sol.png",
  },
  {
    name: "Sui",
    symbol: "SUI",
    price: "$1.45",
    change: "+0.30",
    image: "/sui.png",
  },
  {
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    change: "0.00",
    image: "/tether.png",
  },
  {
    name: "Toncoin",
    symbol: "TON",
    price: "$5.25",
    change: "+0.75",
    image: "/ton.png",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    price: "$1.00",
    change: "0.00",
    image: "/usdc.png",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "$0.75",
    change: "-0.80",
    image: "/xrp.png",
  },
];


  return (
    <div className="bg-white rounded-xl pb-10">
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
          <img
            src="/dashboardimg.png"
            alt="Overlay"
            className="w-auto h-auto"
          />
        </div>

        {/* Optional overlay gradient for better visibility */}
        <div className="absolute inset-0 bg-[#fdc857]/50 z-0"></div>
      </div>

      {/* Market Section */}
      {/* <section className="border border-[#8E8E93] border-t-0 rounded-xl m-5">
        <div className="flex items-center border border-x-0 border-[#8E8E93] rounded-[12px] h-[52px] px-5 gap-2">
          <img src="/market.png" alt="" />
          <h1 className="text-[24px] text-[#555555] font-medium">Market</h1>
        </div>

        <div className="mx-6">
          {cryptoData.map((item, index) =>
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
                            <h1 className="text-[#555555] mt-1 text-[16px] leading-none font-medium">
                              {coin.symbol}
                            </h1>
                          </div>
                          <div className="flex flex-col items-end mr-4">
                            <h1 className="text-[#555555] text-[20px] leading-none font-medium">
                              {coin.price}
                            </h1>
                            <h1 className="text-[#555555] text-[16px] leading-none font-medium">
                              {coin.change}
                            </h1>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : null
          )}
        </div>
      </section> */}
      <MarketSection/>

      <BitcoinChart />
    </div>
  );
}

{
  /* <section>
        <div className=" bg-[#404040] p-5 mb-5 rounded-xl mx-5 ">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className=" text-[24px] font-medium leading-none text-white">
                Bitcoin Price Chart
              </h1>
            </div>
          </div>
          <img src="/candles.png" alt="" className=" h-auto" />
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-end gap-1">
            <button className=" w-[33px] h-[33px] cursor-pointer flex items-center justify-center rounded-xl text-[#555555] bg-[#f6f075]">
              1D
            </button>
            <button className="w-[33px] h-[33px] cursor-pointer flex items-center justify-center rounded-xl text-[#555555]  bg-[#d9d9d9]">
              1W
            </button>
            <button className="w-[33px] h-[33px] cursor-pointer flex items-center justify-center rounded-xl text-[#555555] bg-[#d9d9d9]">
              1M
            </button>
            <button className="w-[33px] h-[33px] cursor-pointer flex items-center justify-center rounded-xl text-[#555555] bg-[#d9d9d9]">
              1Y
            </button>
          </div>
        </div>
      </section> */
}
