"use client";

import { ChevronUp, X } from "lucide-react";
import { useState } from "react";

interface FiltersSidebarProps {
  selectedBudget: string[];
  setSelectedBudget: (value: string[]) => void;
  selectedPossession: string[];
  setSelectedPossession: (value: string[]) => void;
  selectedAmenities: string[];
  setSelectedAmenities: (value: string[]) => void;
  isNew?: boolean;
  setIsNew: (value: boolean | undefined) => void;
  isTrending?: boolean;
  setIsTrending: (value: boolean | undefined) => void;
  isFeatured?: boolean;
  setIsFeatured: (value: boolean | undefined) => void;
}

export default function FiltersSidebar({
  selectedBudget,
  setSelectedBudget,
  selectedPossession,
  setSelectedPossession,
  selectedAmenities,
  setSelectedAmenities,
  isFeatured,
  setIsFeatured,
  isTrending,
  setIsTrending,
  isNew,
  setIsNew,
}: FiltersSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<{
    budget: boolean;
    possession: boolean;
    amenities: boolean;
  }>({
    budget: true,
    possession: true,
    amenities: true,
  });

  const budgetOptions = [
    "Under 40 L",
    "40 L - 70 L",
    "70 L - 1 Cr",
    "1 Cr - 2 Cr",
    "Above 2 Cr",
    "On Request",
  ];

  const possessionOptions = [
    "Ready to Move",
    "In 1 Year",
    "In 2 Years",
    "In 3 Years",
    "After 3 Years",
  ];

  const amenities = [
    "Parking",
    "Swimming Pool",
    "Lift",
    "Gated Community",
    "Gas Pipeline",
  ];

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: (val: string[]) => void,
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedBudget([]);
    setSelectedPossession([]);
    setSelectedAmenities([]);
    setIsFeatured(undefined);
    setIsTrending(undefined);
    setIsNew(undefined);
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Get all active filters for display
  const activeFilters: Array<{
    label: string;
    category: string;
    remove: () => void;
  }> = [
    ...selectedBudget.map((b) => ({
      label: b,
      category: "budget",
      remove: () =>
        setSelectedBudget(selectedBudget.filter((item) => item !== b)),
    })),
    ...selectedPossession.map((p) => ({
      label: p,
      category: "possession",
      remove: () =>
        setSelectedPossession(selectedPossession.filter((item) => item !== p)),
    })),
    ...selectedAmenities.map((a) => ({
      label: a,
      category: "amenities",
      remove: () =>
        setSelectedAmenities(selectedAmenities.filter((item) => item !== a)),
    })),
    ...(isFeatured
      ? [
          {
            label: "Featured",
            category: "projectType",
            remove: () => setIsFeatured(undefined),
          },
        ]
      : []),
    ...(isTrending
      ? [
          {
            label: "Trending",
            category: "projectType",
            remove: () => setIsTrending(undefined),
          },
        ]
      : []),
    ...(isNew
      ? [
          {
            label: "New Projects",
            category: "projectType",
            remove: () => setIsNew(undefined),
          },
        ]
      : []),
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-32">
      {/* Active Filters Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-900">
            Active Filters
          </h3>
          {activeFilters.length > 0 && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-sm text-orange-600 hover:text-orange-700 font-medium"
            >
              Clear All
            </button>
          )}
        </div>
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter, index) => (
              <button
                key={`${filter.category}-${index}`}
                type="button"
                onClick={filter.remove}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500 bg-white text-sm text-gray-900 hover:bg-orange-50 transition-colors"
              >
                <span>{filter.label}</span>
                <X className="w-3.5 h-3.5 text-red-500" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Budget Section */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          type="button"
          onClick={() => toggleSection("budget")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-base font-semibold text-gray-900">Budget</h4>
          <ChevronUp
            className={`w-4 h-4 text-gray-600 transition-transform ${
              expandedSections.budget ? "" : "rotate-180"
            }`}
          />
        </button>
        {expandedSections.budget && (
          <div className="flex flex-wrap gap-2">
            {budgetOptions.map((option) => {
              const isSelected = selectedBudget.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    toggleFilter(option, selectedBudget, setSelectedBudget)
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-orange-50 border-2 border-orange-500 text-gray-900"
                      : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Possession Section */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          type="button"
          onClick={() => toggleSection("possession")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-base font-semibold text-gray-900">Possession</h4>
          <ChevronUp
            className={`w-4 h-4 text-gray-600 transition-transform ${
              expandedSections.possession ? "" : "rotate-180"
            }`}
          />
        </button>
        {expandedSections.possession && (
          <div className="flex flex-wrap gap-2">
            {possessionOptions.map((option) => {
              const isSelected = selectedPossession.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    toggleFilter(
                      option,
                      selectedPossession,
                      setSelectedPossession,
                    )
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-orange-50 border-2 border-orange-500 text-gray-900"
                      : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Amenities Section */}
      <div>
        <button
          type="button"
          onClick={() => toggleSection("amenities")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-base font-semibold text-gray-900">Amenities</h4>
          <ChevronUp
            className={`w-4 h-4 text-gray-600 transition-transform ${
              expandedSections.amenities ? "" : "rotate-180"
            }`}
          />
        </button>
        {expandedSections.amenities && (
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity) => {
              const isSelected = selectedAmenities.includes(amenity);
              return (
                <button
                  key={amenity}
                  type="button"
                  onClick={() =>
                    toggleFilter(
                      amenity,
                      selectedAmenities,
                      setSelectedAmenities,
                    )
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-orange-50 border-2 border-orange-500 text-gray-900"
                      : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {amenity}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
