import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { gql } from "@/__generated__";
import { getApolloClient } from "@/lib/apollo-client";

import ProjectCard from "./ProjectCard";

export const FEATURED_PROJECTS_QUERY = gql(`
  query FeaturedProjects($limit: Int = 4) {
    featuredProjects(limit: $limit) {
      projects {
        id
        name
        status
        configuration
        address
        startingPrice
        possesionDate
        carpetAreaRange {
          min
          max
        }
        builtUpAreaRange {
          min
          max
        }
        type
        coverImage
        reraNumber
        brochure
      }
    }
  }
`);

export default async function FeaturedProjects() {
  const client = getApolloClient();
  const { data } = await client.query({
    query: FEATURED_PROJECTS_QUERY,
    fetchPolicy: "no-cache",
  });

  const projects = data?.featuredProjects?.projects ?? [];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Featured Projects in Bengaluru
            </h2>
            <p className="text-sm text-gray-600">
              Handpicked luxury projects for discerning buyers
            </p>
          </div>
          <Link
            href="/properties?featured=true"
            className="hidden md:flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {!projects.length ? (
          <div className="rounded-lg border border-dashed border-gray-200 bg-white p-6 text-center text-gray-600">
            Featured projects will appear here once they are available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                projectId={project.id}
                name={project.name}
                coverImage={project.coverImage}
                startingPrice={project.startingPrice}
                configuration={project.configuration}
                address={project.address}
                reraNumber={project.reraNumber}
                brochure={project.brochure}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
