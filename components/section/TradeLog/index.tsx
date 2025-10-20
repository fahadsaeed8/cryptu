"use clint";

import BitcoinChart from "../BitcoinCart";
import MarketSection from "../market-section";

export default function TradeLog() {
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

      <MarketSection />

      <BitcoinChart />
    </div>
  );
}
