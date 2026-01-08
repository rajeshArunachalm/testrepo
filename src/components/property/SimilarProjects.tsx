import { MapPin } from "lucide-react";
import Image from "next/image";

export default function SimilarProjects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80",
      title: "Prestige Song of the South",
      location: "Begur Road, Bengaluru",
      price: "₹1.1 Cr onwards",
      type: "2, 3 BHK Apartments",
      status: "Ready to Move",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      title: "Prestige Lakeside Habitat",
      location: "Varthur, Bengaluru",
      price: "₹1.4 Cr onwards",
      type: "2, 3, 4 BHK Apartments",
      status: "Under Construction",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Similar Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-200 cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                fill={true}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 px-2.5 py-1 bg-white text-gray-900 text-xs font-medium">
                {project.status}
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
              <div className="border-t border-gray-100 pt-3 mb-3">
                <div className="text-lg font-bold text-gray-900 mb-0.5">
                  {project.price}
                </div>
                <div className="text-xs text-gray-600">{project.type}</div>
              </div>
              <button
                type="button"
                className="w-full py-2 rounded-md bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
