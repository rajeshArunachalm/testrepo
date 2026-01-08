import Image from "next/image";
import Link from "next/link";
import type { ProjectStatusEnumType } from "@/__generated__/graphql";

interface PropertyCardProps {
  id: string;
  name: string;
  status: ProjectStatusEnumType;
  configuration: string;
  address: string;
  startingPrice: number;
  possesionDate: string;
  type: string;
  coverImage?: string | null;
  reraNumber?: string | null;
  carpetAreaRange: { min: number; max: number };
  builtUpAreaRange: { min: number; max: number };
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&q=80";

export default function PropertyCard({
  id,
  name,
  status,
  configuration,
  address,
  startingPrice,
  coverImage,
  carpetAreaRange,
  builtUpAreaRange,
}: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${id}`}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-200 group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          fill={true}
          src={coverImage || FALLBACK_IMAGE}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {status && (
          <div className="absolute top-2 left-2 px-2.5 py-1 bg-blue-600 text-white text-xs font-medium rounded">
            {status}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight group-hover:text-amber-600 transition-colors text-ellipsis line-clamp-1">
          {name}
        </h3>
        <p className="text-gray-600 text-base mb-2 text-ellipsis line-clamp-1">
          {configuration} for Sale in {address}
        </p>

        <div className="border-t border-gray-100 pt-3 mb-3">
          <div className="text-xs text-gray-600 mb-2">Configurations</div>
          <div className="text-sm font-semibold text-gray-900 mb-3">
            {configuration}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <div className="text-xs text-gray-600 mb-1">Built up Area</div>
              <div className="text-sm font-medium text-gray-900">
                {builtUpAreaRange.min} - {builtUpAreaRange.max}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Carpet Area</div>
              <div className="text-sm font-medium text-gray-900">
                {carpetAreaRange.min} - {carpetAreaRange.max}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-3 mb-3">
          <div className="flex items-baseline gap-2 mb-1">
            <div className="text-lg font-bold text-gray-900">
              {startingPrice}
            </div>
            <div className="text-xs text-gray-600">Onwards</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1.5 text-xs text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              className="w-3.5 h-3.5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
            />
            Add to compare
          </label>
        </div>

        <button
          type="button"
          className="w-full mt-3 py-2 rounded-md border border-amber-600 text-amber-600 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white text-sm font-medium transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </Link>
  );
}
