"use client";

import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

type Crypto = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  image: string;
};

const cryptoList: Crypto[] = [
  { name: "Cardano", symbol: "ADA", price: 0.52, change: +1.2, image: "/ada.png" },
  { name: "Bitcoin", symbol: "BTC", price: 69999, change: +0.8, image: "/bitcoin.png" },
  { name: "BNB", symbol: "BNB", price: 560, change: -0.3, image: "/bnb.png" },
  { name: "BitShares", symbol: "BTS", price: 0.012, change: +0.1, image: "/bts.png" },
  { name: "Ethereum", symbol: "ETH", price: 3200, change: +0.5, image: "/eth.png" },
  { name: "Litecoin", symbol: "LTC", price: 85.3, change: -0.4, image: "/ltc.png" },
  { name: "Solana", symbol: "SOL", price: 175.2, change: +2.1, image: "/sol.png" },
  { name: "Sui", symbol: "SUI", price: 1.3, change: -0.2, image: "/sui.png" },
  { name: "Tether", symbol: "USDT", price: 1.0, change: 0.0, image: "/tether.png" },
  { name: "Toncoin", symbol: "TON", price: 5.1, change: +0.9, image: "/ton.png" },
  { name: "USD Coin", symbol: "USDC", price: 1.0, change: 0.0, image: "/usdc.png" },
  { name: "XRP", symbol: "XRP", price: 0.62, change: -0.5, image: "/xrp.png" },
];

const TradeCard: React.FC = () => {
  const [balance, setBalance] = useState(25430.5);
  const [amount, setAmount] = useState<number>(500);
  const [currency, setCurrency] = useState("USD");
  const [direction, setDirection] = useState<"UP" | "DOWN" | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto>(cryptoList[1]); // default Bitcoin
  const [price, setPrice] = useState(selectedCrypto.price);
  const [change, setChange] = useState(selectedCrypto.change);

  const options = [
    { label: "20%", time: "60 seconds" },
    { label: "40%", time: "120 seconds" },
    { label: "60%", time: "180 seconds" },
    { label: "80%", time: "240 seconds" },
  ];

  // handle trade logic (now updates price too)
  const handleTrade = () => {
    if (!direction || !selectedOption) {
      alert("Please select trade direction and percentage.");
      return;
    }

    let newPrice = price;
    let newChange = change;

    if (direction === "UP") {
      newPrice = parseFloat((price * 1.02).toFixed(2)); // +2%
      newChange = parseFloat((change + 2).toFixed(2));
    } else if (direction === "DOWN") {
      newPrice = parseFloat((price * 0.98).toFixed(2)); // -2%
      newChange = parseFloat((change - 2).toFixed(2));
    }

    setPrice(newPrice);
    setChange(newChange);

    alert(
      `✅ Trade Executed!
--------------------------------
Crypto: ${selectedCrypto.name} (${selectedCrypto.symbol})
Amount: ${amount} ${currency}
Direction: ${direction}
Option: ${selectedOption}
New Price: $${newPrice}
Change: ${newChange > 0 ? "+" : ""}${newChange}%`
    );
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) setAmount(value);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleCryptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = cryptoList.find((c) => c.symbol === e.target.value);
    if (selected) {
      setSelectedCrypto(selected);
      setPrice(selected.price);
      setChange(selected.change);
    }
  };

  return (
    <div className="max-w-[409px] w-full bg-[#d9d9d9] shadow-lg rounded-lg p-4 flex flex-col gap-4">
      {/* Balance */}
      <div className="flex justify-between text-gray-600">
        <span className="text-base font-medium">Available Balance :</span>
        <span className="font-medium text-[24px] leading-none text-gray-600">
          ${balance.toLocaleString()}
        </span>
      </div>

      <div className="-my-3">
        <span className="font-medium text-base text-[#555555]">
          Investment Amount
        </span>
      </div>

      {/* Investment */}
      <div className="flex md:flex-row flex-col items-center gap-2 w-full h-full">
        <div className="flex items-center justify-between rounded-lg px-2 gap-2 w-[167px] h-[52px] bg-white">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-1/2 text-left py-2 outline-none"
          />
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="font-medium bg-transparent outline-none"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
            <option value="PKR">PKR</option>
          </select>
        </div>

        {/* Up / Down buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setDirection("UP")}
            className={`flex-1 flex items-center justify-center cursor-pointer gap-1 w-[100px] h-[52px] rounded-md font-medium text-xl text-white ${
              direction === "UP"
                ? "bg-green-600"
                : "bg-[#2d7645] hover:bg-green-600"
            }`}
          >
            <ArrowUp size={20} /> UP
          </button>
          <button
            onClick={() => setDirection("DOWN")}
            className={`flex-1 flex items-center justify-center cursor-pointer gap-1 w-[100px] h-[52px] text-xl font-medium rounded-md text-white ${
              direction === "DOWN"
                ? "bg-red-600"
                : "bg-[#ea1212] hover:bg-red-600"
            }`}
          >
            <ArrowDown size={20} /> DOWN
          </button>
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full gap-x-10 gap-y-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedOption(`${opt.label} - ${opt.time}`)}
            className={`border-3 rounded-[10px] px-3 py-2 cursor-pointer text-center text-[#555555] w-[167px] h-[71px] ${
              selectedOption === `${opt.label} - ${opt.time}`
                ? "bg-[#acd3ab]"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="text-xl font-medium">{opt.label}</div>
            <div className="text-base font-medium">{opt.time}</div>
          </button>
        ))}
      </div>

      {/* Asset Info */}
      <div className="flex justify-between items-center border-3 rounded-[10px] border-[#555555] px-3 py-2">
        <div className="flex items-center gap-2">
          <img
            src={selectedCrypto.image}
            className="w-[30px] h-[30px] rounded-full object-cover border border-[#666666]"
            alt={selectedCrypto.name}
          />
          <select
            value={selectedCrypto.symbol}
            onChange={handleCryptoChange}
            className="bg-transparent outline-none font-medium text-[#555555]"
          >
            {cryptoList.map((crypto) => (
              <option key={crypto.symbol} value={crypto.symbol}>
                {crypto.name} ({crypto.symbol})
              </option>
            ))}
          </select>
        </div>
        <div className="text-right">
          <span className="font-medium text-2xl text-[#555555]">
            ${price.toLocaleString()}
          </span>
          <div
            className={`text-sm font-medium ${
              change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {change >= 0 ? "+" : ""}
            {change}%
          </div>
        </div>
      </div>

      {/* Place Trade */}
      <button
        onClick={handleTrade}
        className="w-full bg-white cursor-pointer border-[1px] border-[#666666] text-[#555555] text-2xl font-medium py-2"
      >
        Place Trade
      </button>
    </div>
  );
};

export default TradeCard;
