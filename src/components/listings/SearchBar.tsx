"use client";

import { useLazyQuery } from "@apollo/client/react";
import { Building2, MapPin, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { gql } from "@/__generated__";

const SEARCH_QUERY = gql(`
  query Search($term: String!, $limit: Int) {
    search(term: $term, limit: $limit) {
      results {
        id
        name
        type
      }
    }
  }
`);

interface SearchResult {
  id: string;
  name: string;
  type: "LOCALITY" | "DEVELOPER" | "PROJECT";
}

interface SearchBarProps {
  selectedLocalities?: Array<{ id: string; name: string }>;
  selectedDevelopers?: Array<{ id: string; name: string }>;
  onSelectLocality?: (localityId: string, name: string) => void;
  onSelectDeveloper?: (developerId: string, name: string) => void;
  onSelectProject?: (projectId: string) => void;
  onRemoveLocality?: (localityId: string) => void;
  onRemoveDeveloper?: (developerId: string) => void;
}

export default function SearchBar({
  selectedLocalities = [],
  selectedDevelopers = [],
  onSelectLocality,
  onSelectDeveloper,
  onSelectProject,
  onRemoveLocality,
  onRemoveDeveloper,
}: SearchBarProps) {
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const [executeSearch, { loading, data, error }] = useLazyQuery(SEARCH_QUERY);

  useEffect(() => {
    if (error) {
      console.error("Search error:", error);
      setSearchResults([]);
      setShowDropdown(false);
    } else if (data?.search?.results) {
      setSearchResults(data.search.results);
      if (data.search.results.length > 0) {
        setShowDropdown(true);
      }
    }
  }, [data, error]);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
    if (value.length > 0) {
      executeSearch({
        variables: {
          term: value,
          limit: 10,
        },
      });
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const handleSelect = (result: SearchResult) => {
    setSearchText("");
    setSearchResults([]);
    setShowDropdown(false);

    if (result.type === "LOCALITY" && onSelectLocality) {
      onSelectLocality(result.id, result.name);
    } else if (result.type === "DEVELOPER" && onSelectDeveloper) {
      onSelectDeveloper(result.id, result.name);
    } else if (result.type === "PROJECT" && onSelectProject) {
      onSelectProject(result.id);
    }
  };

  const allActiveFilters = [
    ...selectedLocalities.map((l) => ({ ...l, type: "LOCALITY" as const })),
    ...selectedDevelopers.map((d) => ({ ...d, type: "DEVELOPER" as const })),
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "LOCALITY":
        return MapPin;
      case "DEVELOPER":
        return User;
      case "PROJECT":
        return Building2;
      default:
        return MapPin;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "LOCALITY":
        return "Locality";
      case "DEVELOPER":
        return "Developer";
      case "PROJECT":
        return "Project";
      default:
        return "";
    }
  };

  const leftPadding = allActiveFilters.length > 0 ? "pl-2" : "pl-10";

  return (
    <div className="relative flex-1 max-w-2xl">
      <div className="relative">
        {allActiveFilters.length === 0 && (
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        )}
        <div
          className={`flex items-center gap-2 w-full ${leftPadding} pr-4 py-2.5 border border-gray-300 rounded-md bg-white focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-transparent`}
        >
          {/* Active Filter Pills */}
          {allActiveFilters.map((filter) => (
            <button
              key={`${filter.type}-${filter.id}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (filter.type === "LOCALITY" && onRemoveLocality) {
                  onRemoveLocality(filter.id);
                } else if (filter.type === "DEVELOPER" && onRemoveDeveloper) {
                  onRemoveDeveloper(filter.id);
                }
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-500 text-sm text-gray-900 hover:bg-orange-100 transition-colors whitespace-nowrap"
            >
              <span className="truncate max-w-[120px]">{filter.name}</span>
              <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
            </button>
          ))}

          {/* Search Input */}
          <input
            type="text"
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => {
              if (searchText.length > 0 || searchResults.length > 0) {
                setShowDropdown(true);
              }
            }}
            onBlur={() => {
              // Delay hiding dropdown to allow click events
              setTimeout(() => setShowDropdown(false), 200);
            }}
            placeholder={
              allActiveFilters.length > 0
                ? "Enter Locality, Property or Developer"
                : "Search for locality, landmark, project, or builder"
            }
            className="flex-1 outline-none text-sm bg-transparent placeholder:text-gray-400"
          />
          {loading && (
            <div className="shrink-0">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-orange-600 rounded-full animate-spin" />
            </div>
          )}
        </div>
      </div>

      {showDropdown && searchResults.length > 0 && (
        // biome-ignore lint/a11y/noStaticElementInteractions: Needed to prevent input blur
        <div
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-y-auto z-50"
          onMouseDown={(e) => {
            // Prevent input blur when clicking on dropdown
            e.preventDefault();
          }}
        >
          {searchResults.map((result) => {
            const Icon = getIcon(result.type);
            return (
              <button
                key={`${result.type}-${result.id}`}
                type="button"
                className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 text-left"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(result);
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{result.name}</span>
                </div>
                <span className="text-xs text-gray-500">
                  {getTypeLabel(result.type)}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
