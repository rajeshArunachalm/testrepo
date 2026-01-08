"use client";

import { useSuspenseQuery } from "@apollo/client/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { gql } from "@/__generated__";
import {
  ListingSortType,
  ProjectStatusEnumType,
} from "@/__generated__/graphql";
import FiltersSidebar from "@/components/listings/FiltersSidebar";
import PropertyCard from "@/components/listings/PropertyCard";
import SearchBar from "@/components/listings/SearchBar";
import SortDropdown from "@/components/listings/SortDropdown";

export const PROPERTIES_LISITNG_QUERY = gql(`
  query PropertiesListing($limit: Int, $page: Int, $filters: ListingFilterInputType, $sortBy: ListingSortType) {
    listing(limit: $limit, page: $page, filters: $filters, sortBy: $sortBy) {
      projects {
        id
        name
        status
        configuration
        address
        startingPrice
        possesionDate
        carpetAreaRange {
          min
          max
        }
        builtUpAreaRange {
          min
          max
        }
        type
        coverImage
        reraNumber
      }
      pageInfo {
        isFirstPage
        isLastPage
        currentPage
        previousPage
        nextPage
        pageCount
        totalCount
      }
    }
  }
`);

function PageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedBudget, setSelectedBudget] = useState<string[]>([]);
  const [selectedPossession, setSelectedPossession] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedLocalities, setSelectedLocalities] = useState<
    Array<{ id: string; name: string }>
  >([]);
  const [selectedDevelopers, setSelectedDevelopers] = useState<
    Array<{ id: string; name: string }>
  >([]);
  const [isFeatured, setIsFeatured] = useState<boolean | undefined>(undefined);
  const [isTrending, setIsTrending] = useState<boolean | undefined>(undefined);
  const [isNew, setIsNew] = useState<boolean | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>("Relevance");

  // Initialize filters from URL params on mount
  useEffect(() => {
    const featured = searchParams.get("featured");
    const trending = searchParams.get("trending");
    const newProjects = searchParams.get("new");
    const localityId = searchParams.get("localityId");
    const localityName = searchParams.get("localityName");
    const developerId = searchParams.get("developerId");
    const developerName = searchParams.get("developerName");

    if (featured === "true") {
      setIsFeatured(true);
    }
    if (trending === "true") {
      setIsTrending(true);
    }
    if (newProjects === "true") {
      setIsNew(true);
    }
    if (localityId && localityName) {
      setSelectedLocalities([{ id: localityId, name: localityName }]);
    }
    if (developerId && developerName) {
      setSelectedDevelopers([{ id: developerId, name: developerName }]);
    }
  }, [searchParams]);

  // Build filters object for GraphQL query
  const filters = useMemo(() => {
    const filterObj: {
      budget?: string[];
      possession?: string[];
      amenities?: string[];
      localityIds?: string[];
      developerIds?: string[];
      isFeatured?: boolean;
      isTrending?: boolean;
      status?: ProjectStatusEnumType;
    } = {};

    if (selectedBudget.length > 0) {
      filterObj.budget = selectedBudget;
    }
    if (selectedPossession.length > 0) {
      filterObj.possession = selectedPossession;
    }
    if (selectedAmenities.length > 0) {
      filterObj.amenities = selectedAmenities;
    }
    if (selectedLocalities.length > 0) {
      filterObj.localityIds = selectedLocalities.map((l) => l.id);
    }
    if (selectedDevelopers.length > 0) {
      filterObj.developerIds = selectedDevelopers.map((d) => d.id);
    }
    if (isFeatured !== undefined) {
      filterObj.isFeatured = isFeatured;
    }
    if (isTrending !== undefined) {
      filterObj.isTrending = isTrending;
    }
    if (isNew !== undefined && isNew) {
      filterObj.status = ProjectStatusEnumType.NewLaunch;
    }

    return Object.keys(filterObj).length > 0 ? filterObj : undefined;
  }, [
    selectedBudget,
    selectedPossession,
    selectedAmenities,
    selectedLocalities,
    selectedDevelopers,
    isFeatured,
    isTrending,
    isNew,
  ]);

  const handleSelectLocality = (localityId: string, name: string) => {
    if (!selectedLocalities.some((l) => l.id === localityId)) {
      setSelectedLocalities([...selectedLocalities, { id: localityId, name }]);
    }
  };

  const handleSelectDeveloper = (developerId: string, name: string) => {
    if (!selectedDevelopers.some((d) => d.id === developerId)) {
      setSelectedDevelopers([...selectedDevelopers, { id: developerId, name }]);
    }
  };

  const handleSelectProject = (projectId: string) => {
    // Redirect to property details page (using project ID)
    router.push(`/properties/${projectId}`);
  };

  // Map sortBy display name to enum value
  const sortByEnum = useMemo(() => {
    if (sortBy === "Relevance") return ListingSortType.Relevance;
    if (sortBy === "Price - Low to High") return ListingSortType.PriceLowToHigh;
    if (sortBy === "Price - High to Low") return ListingSortType.PriceHighToLow;
    if (sortBy === "Newest First") return ListingSortType.NewestFirst;
    if (sortBy === "Possession Date") return ListingSortType.PossessionDate;
    return ListingSortType.Relevance;
  }, [sortBy]);

  const { data } = useSuspenseQuery(PROPERTIES_LISITNG_QUERY, {
    variables: {
      limit: 10,
      page: currentPage,
      filters,
      sortBy: sortByEnum,
    },
  });

  const properties = data?.listing?.projects ?? [];
  const pageInfo = data?.listing?.pageInfo;

  // Reset to page 1 when filters or sort changes
  const prevFiltersRef = useRef<string | undefined>(undefined);
  const prevSortByRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    const filtersString = JSON.stringify(filters);
    if (
      prevFiltersRef.current !== filtersString ||
      prevSortByRef.current !== sortBy
    ) {
      setCurrentPage(1);
      prevFiltersRef.current = filtersString;
      prevSortByRef.current = sortBy;
    }
  }, [filters, sortBy]);

  return (
    <main>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Flats & Apartments for sale in Bengaluru
          </h1>
          <p className="text-sm text-gray-600">
            {pageInfo?.totalCount
              ? `Showing ${(currentPage - 1) * 10 + 1}-${Math.min(currentPage * 10, pageInfo.totalCount)} of ${pageInfo.totalCount} results`
              : `Showing ${properties.length} results`}
          </p>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-14 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <SearchBar
              selectedLocalities={selectedLocalities}
              selectedDevelopers={selectedDevelopers}
              onSelectLocality={handleSelectLocality}
              onSelectDeveloper={handleSelectDeveloper}
              onSelectProject={handleSelectProject}
              onRemoveLocality={(id) =>
                setSelectedLocalities(
                  selectedLocalities.filter((l) => l.id !== id),
                )
              }
              onRemoveDeveloper={(id) =>
                setSelectedDevelopers(
                  selectedDevelopers.filter((d) => d.id !== id),
                )
              }
            />
            <SortDropdown selectedSort={sortBy} onSortChange={setSortBy} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <FiltersSidebar
              selectedBudget={selectedBudget}
              setSelectedBudget={setSelectedBudget}
              selectedPossession={selectedPossession}
              setSelectedPossession={setSelectedPossession}
              selectedAmenities={selectedAmenities}
              setSelectedAmenities={setSelectedAmenities}
              isFeatured={isFeatured}
              setIsFeatured={setIsFeatured}
              isTrending={isTrending}
              setIsTrending={setIsTrending}
              isNew={isNew}
              setIsNew={setIsNew}
            />
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>

            {/* Pagination */}
            {pageInfo && pageInfo.pageCount > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage(pageInfo.previousPage || 1)}
                  disabled={pageInfo.isFirstPage}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: pageInfo.pageCount }, (_, i) => i + 1)
                  .filter((pageNum) => {
                    // Show first page, last page, current page, and pages around current
                    if (pageInfo.pageCount <= 7) return true;
                    if (pageNum === 1 || pageNum === pageInfo.pageCount)
                      return true;
                    if (Math.abs(pageNum - currentPage) <= 1) return true;
                    return false;
                  })
                  .map((pageNum, index, array) => {
                    // Add ellipsis if there's a gap
                    const showEllipsisBefore =
                      index > 0 && pageNum - array[index - 1] > 1;
                    return (
                      <div key={pageNum} className="flex items-center gap-2">
                        {showEllipsisBefore && (
                          <span className="px-2 text-gray-500">...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                            currentPage === pageNum
                              ? "bg-orange-600 border-orange-600 text-white"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      </div>
                    );
                  })}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage(pageInfo.nextPage || currentPage)
                  }
                  disabled={pageInfo.isLastPage}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
