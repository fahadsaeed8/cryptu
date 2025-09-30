import Image from "next/image";

export default function TradeLog() {
  return (
    <div className="min-h-screen no-scrollbar bg-gray-100 flex flex-col items-center">
      {/* Header Banner */}
      <div className="w-full relative">
        <Image
          src="/trade-banner.svg"
          alt="Trade Log Banner"
          width={1920}
          height={400}
          className="w-full h-[211px] object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold drop-shadow-lg">
          Trade Log
        </h1>
      </div>

      <div className="w-full max-w-6xl p-4">
        {/* Running Order Section */}
        <div className="mb-6">
          <h2 className="bg-gray-700 text-white px-3 py-2 font-semibold">
            Running Order
          </h2>
          <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
            <table className="w-full border border-gray-300 text-sm text-gray-700">
              <thead>
                <tr className="bg-[#5A5A24] text-white">
                  <th className="px-2 py-2 border">S.N</th>
                  <th className="px-2 py-2 border">Crypto Currency</th>
                  <th className="px-2 py-2 border">Amount</th>
                  <th className="px-2 py-2 border">Direction</th>
                  <th className="px-2 py-2 border">Result</th>
                  <th className="px-2 py-2 border">Status</th>
                  <th className="px-2 py-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill(null)
                  .map((_, idx) => (
                    <tr key={idx} className="bg-gray-100 text-center">
                      <td className="border px-2 py-2">{idx + 1}</td>
                      <td className="border px-2 py-2">Crypto Currency</td>
                      <td className="border px-2 py-2">Amount</td>
                      <td className="border px-2 py-2">Direction</td>
                      <td className="border px-2 py-2">Result</td>
                      <td className="border px-2 py-2">Status</td>
                      <td className="border px-2 py-2">Date</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Closed Order Section */}
        <div>
          <h2 className="bg-gray-700 text-white px-3 py-2 font-semibold">
            Closed Order
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-gray-700">
              <thead>
                <tr className="bg-[#5A5A24] text-white">
                  <th className="px-2 py-2 border">S.N</th>
                  <th className="px-2 py-2 border">Crypto Currency</th>
                  <th className="px-2 py-2 border">Amount</th>
                  <th className="px-2 py-2 border">Direction</th>
                  <th className="px-2 py-2 border">Leverage</th>
                  <th className="px-2 py-2 border">Result</th>
                  <th className="px-2 py-2 border">Profit/Loss</th>
                  <th className="px-2 py-2 border">Status</th>
                  <th className="px-2 py-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill(null)
                  .map((_, idx) => (
                    <tr key={idx} className="bg-gray-100 text-center">
                      <td className="border px-2 py-2">{idx + 1}</td>
                      <td className="border px-2 py-2">Crypto Currency</td>
                      <td className="border px-2 py-2">Amount</td>
                      <td className="border px-2 py-2">Direction</td>
                      <td className="border px-2 py-2">Leverage</td>
                      <td className="border px-2 py-2">Result</td>
                      <td className="border px-2 py-2">Profit/Loss</td>
                      <td className="border px-2 py-2">Status</td>
                      <td className="border px-2 py-2">Date</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
