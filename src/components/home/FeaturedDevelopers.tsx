import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gql } from "@/__generated__/gql";
import { ProjectStatusEnumType } from "@/__generated__/graphql";
import { getApolloClient } from "@/lib/apollo-client";

const FEATURED_DEVELOPERS_QUERY = gql(`
  query FeaturedDevelopers(
    $limit: Int
    $page: Int
    $filters: ProjectFilterInputType
  ) {
    featuredDevelopers(limit: $limit, page: $page) {
      developers {
        id
        name
        slug
        logo
        description
        isFeatured
        projects(filters: $filters) {
          pageInfo {
            totalCount
          }
        }
        createdAt
        updatedAt
      }
    }
  }
`);

export default async function FeaturedDevelopers() {
  const client = getApolloClient();
  const { data } = await client.query({
    query: FEATURED_DEVELOPERS_QUERY,
    fetchPolicy: "no-cache",
    variables: {
      page: 1,
      limit: 6,
      filters: {
        status: ProjectStatusEnumType.NewLaunch,
      },
    },
  });

  const developers = data?.featuredDevelopers.developers ?? [];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Featured Developers in Bengaluru
          </h2>
          <p className="text-sm text-gray-600">
            Trusted names in real estate development
          </p>
        </div>

        {!developers.length ? (
          <div className="rounded-lg border border-dashed border-gray-200 bg-white p-6 text-center text-gray-600">
            Featured developers will appear here once they are available.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {developers.map((developer) => (
              <Link
                key={developer.id}
                href={`/properties?developerId=${developer.id}&developerName=${encodeURIComponent(developer.name)}`}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-orange-600 transition-all cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-3 text-2xl">
                    <Image
                      fill={true}
                      src={developer.logo}
                      alt={developer.name}
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0.5 leading-tight">
                    {developer.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {developer.projects.pageInfo.totalCount} Projects
                  </p>
                  <div className="flex items-center gap-0.5 text-xs text-orange-600 hover:text-orange-700 font-medium">
                    View <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
