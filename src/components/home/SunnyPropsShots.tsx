export default function SunnyPropsShots() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-orange-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            SunnyProps Shots
          </h2>
          <p className="text-sm text-gray-600">
            Quick property insights and market updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: "Property Tips", icon: "💡", color: "bg-blue-600" },
            { title: "Market Trends", icon: "📈", color: "bg-green-600" },
            { title: "Investment Guide", icon: "💰", color: "bg-purple-600" },
            { title: "Legal Advice", icon: "⚖️", color: "bg-red-600" },
          ].map((shot) => (
            <div
              key={shot.title}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-all duration-200 cursor-pointer group"
            >
              <div
                className={`w-12 h-12 ${shot.color} rounded-lg flex items-center justify-center text-2xl mb-3 group-hover:scale-105 transition-transform`}
              >
                {shot.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5 leading-tight">
                {shot.title}
              </h3>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Discover expert insights and tips
              </p>
              <button
                type="button"
                className="text-orange-600 hover:text-orange-700 font-medium text-xs"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
