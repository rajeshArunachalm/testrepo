"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PriceInsight() {
  const data = [
    { month: "Jan", price: 42000 },
    { month: "Feb", price: 43500 },
    { month: "Mar", price: 44200 },
    { month: "Apr", price: 45800 },
    { month: "May", price: 47100 },
    { month: "Jun", price: 48500 },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Price Insights of Whitefield
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 hover:border-amber-600 hover:bg-orange-50 hover:text-amber-600 transition-colors"
          >
            6M
          </button>
          <button
            type="button"
            className="px-3 py-1.5 text-xs font-medium rounded-md bg-orange-50 border border-amber-600 text-amber-600"
          >
            3Y
          </button>
          <button
            type="button"
            className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 hover:border-amber-600 hover:bg-orange-50 hover:text-amber-600 transition-colors"
          >
            5Y
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-sm text-red-600 font-medium">-0.16 %</span>
          <span className="text-xs text-gray-600">Change in last 1 year</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200} className="sm:h-[250px]!">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: "#666" }}
            stroke="#e0e0e0"
            className="sm:text-xs"
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#666" }}
            stroke="#e0e0e0"
            className="sm:text-xs"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              fontSize: "11px",
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ fill: "#f59e0b", r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
