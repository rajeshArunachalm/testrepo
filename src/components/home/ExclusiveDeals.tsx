import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

const deals = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "L&T Realty",
    subtitle: "Seawoods Residences",
    location: "Whitefield, Bengaluru",
    discount: "10% Off",
    price: "₹1.2 Cr onwards",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Oberoi Realty",
    subtitle: "Sky City",
    location: "HSR Layout, Bengaluru",
    discount: "₹20 Lakh Off",
    price: "₹2.5 Cr onwards",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Hiranandani",
    subtitle: "Fortune City",
    location: "Marathahalli, Bengaluru",
    discount: "15% Off",
    price: "₹95 Lakh onwards",
  },
];

export default function ExclusiveDeals() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Exclusive Deals in Bengaluru
            </h2>
            <p className="text-sm text-gray-600">
              Limited time offers on premium properties
            </p>
          </div>
          <button
            type="button"
            className="hidden md:flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-200 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill={true}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-3 py-1 bg-red-600 text-white text-xs font-semibold">
                  {deal.discount}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-0.5 leading-tight">
                  {deal.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2.5">{deal.subtitle}</p>
                <div className="flex items-center gap-1 text-gray-600 text-xs mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{deal.location}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 mb-3">
                  <div className="text-lg font-bold text-gray-900">
                    {deal.price}
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-2 rounded-md bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium transition-colors"
                >
                  Explore Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
