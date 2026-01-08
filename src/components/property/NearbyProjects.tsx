import { MapPin } from "lucide-react";
import Image from "next/image";

export default function NearbyProjects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      title: "Brigade Cornerstone Utopia",
      location: "Whitefield, Bengaluru",
      price: "₹1.2 Cr onwards",
      type: "2, 3 BHK",
      distance: "0.8 km",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "Sobha Hartland",
      location: "Whitefield, Bengaluru",
      price: "₹1.5 Cr onwards",
      type: "3, 4 BHK",
      distance: "1.2 km",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      title: "Purva Venezia",
      location: "Yelahanka, Bengaluru",
      price: "₹95 L onwards",
      type: "2, 3 BHK",
      distance: "1.5 km",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Nearby Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-200 cursor-pointer group"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                fill={true}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium text-gray-900">
                {project.distance}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-1.5 leading-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-1 text-gray-600 text-xs mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <div className="text-lg font-bold text-gray-900 mb-1">
                  {project.price}
                </div>
                <div className="text-xs text-gray-600 mb-3">{project.type}</div>
                <button
                  type="button"
                  className="w-full py-2 rounded-md border border-amber-600 text-amber-600 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white text-sm font-medium transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
