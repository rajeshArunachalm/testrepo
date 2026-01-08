import { Building2, Calendar, Home, MapPin } from "lucide-react";

interface PropertyOverviewProps {
  name: string;
  description: string;
  location: string;
  sizeRange: string | null;
  status: string;
  // keyHighlights: string[];
}

export default function PropertyOverview({
  name,
  description,
  location,
  status,
  sizeRange,
  // keyHighlights,
}: PropertyOverviewProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          {name}
        </h1>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          ₹4.5 Cr onwards
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="text-xs text-gray-600">Configuration</div>
            <div className="text-sm font-semibold text-gray-900">
              2, 3, 4 BHK
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="text-xs text-gray-600">Size Range</div>
            <div className="text-sm font-semibold text-gray-900">
              {sizeRange ?? "Available on Request"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="text-xs text-gray-600">Possession</div>
            <div className="text-sm font-semibold text-gray-900">Dec 2026</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="text-xs text-gray-600">Status</div>
            <div className="text-sm font-semibold text-amber-600">{status}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 sm:pt-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
          About {name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
          {description}
        </p>
      </div>

      {/* <div className="border-t border-gray-200 pt-4 sm:pt-6 mt-4 sm:mt-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
          Key Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {keyHighlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span className="text-sm text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
