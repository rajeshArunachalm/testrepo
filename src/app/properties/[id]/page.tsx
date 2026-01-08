import { gql } from "@/__generated__";
import BankOffers from "@/components/property/BankOffers";
import DeveloperSection from "@/components/property/DeveloperSection";
import EnquiryForm from "@/components/property/EnquiryForm";
import ImageGallery from "@/components/property/ImageGallery";
import NearbyProjects from "@/components/property/NearbyProjects";
import PaymentCalculator from "@/components/property/PaymentCalculator";
import PriceInsight from "@/components/property/PriceInsight";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyConfigurations from "@/components/property/PropertyConfigurations";
import PropertyFAQs from "@/components/property/PropertyFAQs";
import PropertyLocality from "@/components/property/PropertyLocality";
import PropertyOverview from "@/components/property/PropertyOverview";
import SimilarProjects from "@/components/property/SimilarProjects";
import { getApolloClient } from "@/lib/apollo-client";

export const PROPERTY_DETAILS_QUERY = gql(`
  query UserProject($userProjectId: ID!) {
    userProject(id: $userProjectId) {
      id
      name
      configuration
      brochure
      address
      startingPrice
      possesionDate
      reraNumber
      coverImage
      carpetAreaRange {
        max
        min
      }
      builtUpAreaRange {
        max
        min
      }
      status
      type
  
      developer {
        id
        description
        logo
        name
        projects {
          pageInfo {
            totalCount
          }
        }
      }
      images {
        projectImages {
          id
          url
        }
      }
      amenities {
        amenities {
          id
          name
          icon
        }
      }
      description
      properties {
        properties {
          id
          plotArea
          carpetArea
          builtupArea
          price
          propertyType {
            name
          }
          vastuCompliant
          superBuiltupArea
          configuration {
            name
          }
        }
      }
    }
  }
`);

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { id } = await params;
  const client = getApolloClient();
  const { data } = await client.query({
    query: PROPERTY_DETAILS_QUERY,
    fetchPolicy: "no-cache",
    variables: { userProjectId: id },
  });

  const project = data?.userProject;
  const images = project?.images.projectImages.map((image) => image.url);

  if (!project) {
    return (
      <main>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6">
          <div className="text-center py-12">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Property Not Found
            </h1>
            <p className="text-gray-600">
              The property you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ImageGallery images={images} />

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <PropertyOverview
              name={project.name}
              description={project.description}
              // keyHighlights={[]}
              location={project.address}
              sizeRange={`${project.carpetAreaRange.min} - ${project.carpetAreaRange.max} sq.ft`}
              status={project.status}
            />
            {project.properties?.properties?.length > 0 && (
              <PropertyConfigurations
                configurations={project.properties.properties.map(
                  (property) => ({
                    name: property.configuration?.name ?? "",
                    propertyType: property.propertyType?.name ?? "",
                    vastuCompliant: property.vastuCompliant ?? false,
                    configuration: property.configuration?.name ?? "",
                    builtupArea: property.builtupArea ?? 0,
                    carpetArea: property.carpetArea ?? 0,
                    plotArea: property.plotArea ?? 0,
                    superBuiltupArea: property.superBuiltupArea ?? 0,
                    price: property.price ?? 0,
                  }),
                )}
              />
            )}
            <PropertyAmenities amenities={project.amenities?.amenities} />
            <PropertyLocality />
            <PriceInsight />
            <PaymentCalculator />
            <BankOffers />
            <DeveloperSection
              name={project.developer.name}
              description={project.developer.description}
            />
            <NearbyProjects />
            <SimilarProjects />
            <PropertyFAQs />
          </div>

          {/* Sidebar - Shows at bottom on mobile */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="lg:sticky lg:top-20">
              <EnquiryForm
                projectId={project.id}
                projectName={project.name}
                developerName={project.developer.name}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
