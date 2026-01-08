"use client";

import { useState } from "react";

export default function PaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(4500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfPayments = tenure * 12;

    const emi =
      (principal * ratePerMonth * (1 + ratePerMonth) ** numberOfPayments) /
      ((1 + ratePerMonth) ** numberOfPayments - 1);

    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - loanAmount;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Payment Calculator
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {/* Loan Amount */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="loanAmount"
              className="text-sm font-medium text-gray-700"
            >
              Loan Amount
            </label>
            <span className="text-sm font-semibold text-gray-900">
              ₹{(loanAmount / 100000).toFixed(1)} L
            </span>
          </div>
          <input
            id="loanAmount"
            type="range"
            min="1000000"
            max="10000000"
            step="100000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="interestRate"
              className="text-sm font-medium text-gray-700"
            >
              Interest Rate (p.a.)
            </label>
            <span className="text-sm font-semibold text-gray-900">
              {interestRate}%
            </span>
          </div>
          <input
            id="interestRate"
            type="range"
            min="6"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        {/* Tenure */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="tenure"
              className="text-sm font-medium text-gray-700"
            >
              Loan Tenure
            </label>
            <span className="text-sm font-semibold text-gray-900">
              {tenure} Years
            </span>
          </div>
          <input
            id="tenure"
            type="range"
            min="5"
            max="30"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        {/* Results */}
        <div className="border-t border-gray-200 pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-700">
              Monthly EMI
            </span>
            <span className="text-xl sm:text-2xl font-bold text-amber-600">
              ₹{emi.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Principal Amount</span>
            <span className="text-sm font-semibold text-gray-900">
              ₹{loanAmount.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Total Interest</span>
            <span className="text-sm font-semibold text-gray-900">
              ₹{totalInterest.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-700">
              Total Amount Payable
            </span>
            <span className="text-lg font-bold text-gray-900">
              ₹{totalAmount.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
