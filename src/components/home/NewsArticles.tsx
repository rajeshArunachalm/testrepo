import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Bengaluru Real Estate Market Shows Strong Recovery in Q4 2024",
    excerpt:
      "Property sales in Bengaluru have increased by 25% compared to last quarter, indicating strong market sentiment.",
    date: "Nov 20, 2025",
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
  },
  {
    id: 2,
    title: "New Infrastructure Projects to Boost Property Values",
    excerpt:
      "The upcoming metro lines and coastal road project are expected to significantly impact real estate prices.",
    date: "Nov 18, 2025",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export default function NewsArticles() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Featured News & Articles
            </h2>
            <p className="text-sm text-gray-600">
              Stay updated with the latest real estate trends
            </p>
          </div>
          <button
            type="button"
            className="hidden md:flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-200 cursor-pointer group"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="relative h-40 sm:h-auto overflow-hidden">
                  <Image
                    fill={true}
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:col-span-2 p-4">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
