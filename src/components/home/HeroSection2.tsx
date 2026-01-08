import { Search } from "lucide-react";
import Link from "next/link";

export default function HeroSection2() {
  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#1a2b4a]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-[#1a2b4a]/90" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-3 leading-tight">
            Your Home Buying Journey Starts Here!
          </h1>
          <p className="text-base text-white/90 mb-6">
            Explore thousands of properties across India
          </p>

          {/* Search Box */}
          <div className="bg-white shadow-lg rounded-lg p-1.5">
            <div className="flex flex-col md:flex-row gap-1.5">
              <div className="flex-1 flex items-center gap-2 px-3 py-2.5 border-b md:border-b-0 md:border-r border-gray-200">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for locality, landmark, project, or builder"
                  className="w-full outline-none text-sm"
                />
              </div>
              <button
                type="button"
                className="rounded-md bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium transition-colors"
              >
                <Link
                  href="/properties"
                  className=" flex items-center justify-center gap-2 px-6 py-2.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </Link>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Whitefield",
              "Koramangala",
              "HSR Layout",
              "Indiranagar",
              "Electronic City",
            ].map((location) => (
              <button
                type="button"
                key={location}
                className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs border border-white/20 transition-colors"
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
