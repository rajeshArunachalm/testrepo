import Image from "next/image";

interface PropertyAmenitiesProps {
  amenities?: {
    id: string;
    name: string;
    icon: string;
  }[];
}

export default function PropertyAmenities({
  amenities = [],
}: PropertyAmenitiesProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Amenities
      </h2>

      {amenities.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {amenities.map((amenity) => {
            return (
              <div
                key={amenity.id}
                className="flex flex-col items-center text-center p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-amber-600 transition-colors"
              >
                <Image
                  src={amenity.icon}
                  alt={amenity.name}
                  width={40}
                  height={40}
                  className="mb-2 sm:mb-3"
                />

                <span className="text-xs font-medium text-gray-900">
                  {amenity.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-600">No amenities available.</p>
      )}
    </div>
  );
}
