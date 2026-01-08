"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SortDropdownProps {
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

export default function SortDropdown({
  selectedSort,
  onSortChange,
}: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortOptions = [
    "Relevance",
    "Price - Low to High",
    "Price - High to Low",
    "Newest First",
    "Possession Date",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Sort by: {selectedSort}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {sortOptions.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => {
                onSortChange(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                selectedSort === option
                  ? "text-orange-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
