export default function BankOffers() {
  const banks = [
    {
      name: "HDFC Bank",
      logo: "🏦",
      rate: "8.35% p.a.",
      processing: "Up to 0.50%",
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "ICICI Bank",
      logo: "🏦",
      rate: "8.40% p.a.",
      processing: "Up to 0.50%",
      color: "bg-orange-50 border-orange-200",
    },
    {
      name: "Axis Bank",
      logo: "🏦",
      rate: "8.50% p.a.",
      processing: "Up to 1%",
      color: "bg-red-50 border-red-200",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Bank Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {banks.map((bank) => (
          <div
            key={bank.name}
            className={`border rounded-lg p-4 ${bank.color}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl">
                {bank.logo}
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                {bank.name}
              </h3>
            </div>

            <div className="space-y-2 mb-4">
              <div>
                <div className="text-xs text-gray-600 mb-1">Interest Rate</div>
                <div className="text-lg font-bold text-gray-900">
                  {bank.rate}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 mb-1">Processing Fee</div>
                <div className="text-sm font-semibold text-gray-900">
                  {bank.processing}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-2 rounded-md bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium transition-colors"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
