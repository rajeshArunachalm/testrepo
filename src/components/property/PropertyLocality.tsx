"use client";

import {
  Building,
  GraduationCap,
  Hospital,
  School,
  ShoppingBag,
  TreePine,
  Utensils,
} from "lucide-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
// biome-ignore lint/suspicious/noExplicitAny: --
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function PropertyLocality() {
  const position: [number, number] = [12.9698, 77.75]; // Whitefield, Bengaluru coordinates

  const nearbyPlaces = [
    {
      icon: School,
      name: "Delhi Public School Whitefield",
      distance: "0.32 km",
      category: "Schools",
    },
    {
      icon: GraduationCap,
      name: "Inventure Academy",
      distance: "1.36 km",
      category: "Schools",
    },
    {
      icon: GraduationCap,
      name: "Presidency School Whitefield",
      distance: "1.26 km",
      category: "Schools",
    },
    {
      icon: Hospital,
      name: "Manipal Hospital Whitefield",
      distance: "2.1 km",
      category: "Hospitals",
    },
    {
      icon: ShoppingBag,
      name: "Phoenix Marketcity",
      distance: "1.5 km",
      category: "Shopping",
    },
    {
      icon: Utensils,
      name: "VR Bengaluru",
      distance: "0.5 km",
      category: "Restaurants",
    },
  ];

  const categories = [
    { name: "Schools", icon: School },
    { name: "Hospitals", icon: Hospital },
    { name: "Shopping Center", icon: ShoppingBag },
    { name: "Park", icon: TreePine },
    { name: "Restaurant", icon: Utensils },
    { name: "Bank", icon: Building },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Locality
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              type="button"
              key={category.name}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border ${
                index === 0
                  ? "border-amber-600 bg-orange-50 text-amber-600"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              } text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 transition-colors`}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Map */}
      <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={position}
          zoom={14}
          style={{ height: "250px", width: "100%" }}
          className="sm:h-[350px]! z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Prestige Nautilus</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Nearby Places List */}
      <div className="space-y-3">
        {nearbyPlaces.map((place) => {
          const Icon = place.icon;
          return (
            <div
              key={place.name}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-900 truncate">
                  {place.name}
                </span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-3 pl-6 sm:pl-0">
                <span className="text-xs sm:text-sm text-gray-600">
                  {place.distance}
                </span>
                <button
                  type="button"
                  className="text-xs sm:text-sm text-amber-600 hover:text-amber-700 whitespace-nowrap"
                >
                  Directions
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="w-full mt-4 py-2 text-center text-sm text-amber-600 hover:text-amber-700 font-medium border border-gray-200 rounded-lg hover:border-amber-600 transition-colors"
      >
        Show all
      </button>
    </div>
  );
}
