import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gql } from "@/__generated__";
import { getApolloClient } from "@/lib/apollo-client";

export const TOP_LOCALITIES_QUERY = gql(`
  query TopLocalities($limit: Int = 3) {
    topLocalities(limit: $limit) {
      localities {
        id
        name
        image
        projects {
          pageInfo {
            totalCount
          }
        }
      }
    }
  }
`);

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80";

export default async function TopLocations() {
  const client = getApolloClient();
  const { data } = await client.query({
    query: TOP_LOCALITIES_QUERY,
    fetchPolicy: "no-cache",
  });

  const localities = data?.topLocalities.localities ?? [];
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Top Locations in Bengaluru
            </h2>
            <p className="text-sm text-gray-600">
              Explore properties in Bengaluru's most sought-after areas
            </p>
          </div>
          <button
            type="button"
            className="hidden md:flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {!localities.length ? (
          <div className="rounded-lg border border-dashed border-gray-200 bg-white p-6 text-center text-gray-600">
            Top locations will appear here once they are available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {localities.map((locality) => {
              const imageUrl = locality.image || FALLBACK_IMAGE;
              const propertyCount =
                locality.projects?.pageInfo?.totalCount ?? 0;
              const propertiesText = `${propertyCount}+ Properties`;

              return (
                <Link
                  key={locality.id}
                  href={`/properties?localityId=${locality.id}&localityName=${encodeURIComponent(locality.name)}`}
                  className="relative h-52 rounded-lg overflow-hidden cursor-pointer group block"
                >
                  <Image
                    fill={true}
                    src={imageUrl}
                    alt={locality.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-xl font-semibold mb-1">
                      {locality.name}
                    </h3>
                    <p className="text-sm text-white/90">{propertiesText}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
