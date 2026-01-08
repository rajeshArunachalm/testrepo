/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n  query UserProject($userProjectId: ID!) {\n    userProject(id: $userProjectId) {\n      id\n      name\n      configuration\n      brochure\n      address\n      startingPrice\n      possesionDate\n      reraNumber\n      coverImage\n      carpetAreaRange {\n        max\n        min\n      }\n      builtUpAreaRange {\n        max\n        min\n      }\n      status\n      type\n  \n      developer {\n        id\n        description\n        logo\n        name\n        projects {\n          pageInfo {\n            totalCount\n          }\n        }\n      }\n      images {\n        projectImages {\n          id\n          url\n        }\n      }\n      amenities {\n        amenities {\n          id\n          name\n          icon\n        }\n      }\n      description\n      properties {\n        properties {\n          id\n          plotArea\n          carpetArea\n          builtupArea\n          price\n          propertyType {\n            name\n          }\n          vastuCompliant\n          superBuiltupArea\n          configuration {\n            name\n          }\n        }\n      }\n    }\n  }\n": typeof types.UserProjectDocument;
  "\n  query PropertiesListing($limit: Int, $page: Int, $filters: ListingFilterInputType, $sortBy: ListingSortType) {\n    listing(limit: $limit, page: $page, filters: $filters, sortBy: $sortBy) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n      }\n      pageInfo {\n        isFirstPage\n        isLastPage\n        currentPage\n        previousPage\n        nextPage\n        pageCount\n        totalCount\n      }\n    }\n  }\n": typeof types.PropertiesListingDocument;
  "\n  query FeaturedDevelopers(\n    $limit: Int\n    $page: Int\n    $filters: ProjectFilterInputType\n  ) {\n    featuredDevelopers(limit: $limit, page: $page) {\n      developers {\n        id\n        name\n        slug\n        logo\n        description\n        isFeatured\n        projects(filters: $filters) {\n          pageInfo {\n            totalCount\n          }\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": typeof types.FeaturedDevelopersDocument;
  "\n  query FeaturedProjects($limit: Int = 4) {\n    featuredProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n": typeof types.FeaturedProjectsDocument;
  "\n  query NewProjects($limit: Int = 4) {\n    newProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n": typeof types.NewProjectsDocument;
  "\n  query TopLocalities($limit: Int = 3) {\n    topLocalities(limit: $limit) {\n      localities {\n        id\n        name\n        image\n        projects {\n          pageInfo {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n": typeof types.TopLocalitiesDocument;
  "\n  query TrendingProjects($limit: Int = 4) {\n    trendingProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n": typeof types.TrendingProjectsDocument;
  "\n  query Search($term: String!, $limit: Int) {\n    search(term: $term, limit: $limit) {\n      results {\n        id\n        name\n        type\n      }\n    }\n  }\n": typeof types.SearchDocument;
  "\n  mutation CreateInquiry(\n    $projectId: ID!\n    $name: String!\n    $email: String!\n    $phone: String!\n    $getWhatsappUpdates: Boolean\n    $allowOtherSellersToContact: Boolean\n  ) {\n    createInquiry(\n      projectId: $projectId\n      name: $name\n      email: $email\n      phone: $phone\n      getWhatsappUpdates: $getWhatsappUpdates\n      allowOtherSellersToContact: $allowOtherSellersToContact\n    ) {\n      id\n      name\n      email\n      phone\n    }\n  }\n": typeof types.CreateInquiryDocument;
};
const documents: Documents = {
  "\n  query UserProject($userProjectId: ID!) {\n    userProject(id: $userProjectId) {\n      id\n      name\n      configuration\n      brochure\n      address\n      startingPrice\n      possesionDate\n      reraNumber\n      coverImage\n      carpetAreaRange {\n        max\n        min\n      }\n      builtUpAreaRange {\n        max\n        min\n      }\n      status\n      type\n  \n      developer {\n        id\n        description\n        logo\n        name\n        projects {\n          pageInfo {\n            totalCount\n          }\n        }\n      }\n      images {\n        projectImages {\n          id\n          url\n        }\n      }\n      amenities {\n        amenities {\n          id\n          name\n          icon\n        }\n      }\n      description\n      properties {\n        properties {\n          id\n          plotArea\n          carpetArea\n          builtupArea\n          price\n          propertyType {\n            name\n          }\n          vastuCompliant\n          superBuiltupArea\n          configuration {\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.UserProjectDocument,
  "\n  query PropertiesListing($limit: Int, $page: Int, $filters: ListingFilterInputType, $sortBy: ListingSortType) {\n    listing(limit: $limit, page: $page, filters: $filters, sortBy: $sortBy) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n      }\n      pageInfo {\n        isFirstPage\n        isLastPage\n        currentPage\n        previousPage\n        nextPage\n        pageCount\n        totalCount\n      }\n    }\n  }\n":
    types.PropertiesListingDocument,
  "\n  query FeaturedDevelopers(\n    $limit: Int\n    $page: Int\n    $filters: ProjectFilterInputType\n  ) {\n    featuredDevelopers(limit: $limit, page: $page) {\n      developers {\n        id\n        name\n        slug\n        logo\n        description\n        isFeatured\n        projects(filters: $filters) {\n          pageInfo {\n            totalCount\n          }\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n":
    types.FeaturedDevelopersDocument,
  "\n  query FeaturedProjects($limit: Int = 4) {\n    featuredProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n":
    types.FeaturedProjectsDocument,
  "\n  query NewProjects($limit: Int = 4) {\n    newProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n":
    types.NewProjectsDocument,
  "\n  query TopLocalities($limit: Int = 3) {\n    topLocalities(limit: $limit) {\n      localities {\n        id\n        name\n        image\n        projects {\n          pageInfo {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n":
    types.TopLocalitiesDocument,
  "\n  query TrendingProjects($limit: Int = 4) {\n    trendingProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n":
    types.TrendingProjectsDocument,
  "\n  query Search($term: String!, $limit: Int) {\n    search(term: $term, limit: $limit) {\n      results {\n        id\n        name\n        type\n      }\n    }\n  }\n":
    types.SearchDocument,
  "\n  mutation CreateInquiry(\n    $projectId: ID!\n    $name: String!\n    $email: String!\n    $phone: String!\n    $getWhatsappUpdates: Boolean\n    $allowOtherSellersToContact: Boolean\n  ) {\n    createInquiry(\n      projectId: $projectId\n      name: $name\n      email: $email\n      phone: $phone\n      getWhatsappUpdates: $getWhatsappUpdates\n      allowOtherSellersToContact: $allowOtherSellersToContact\n    ) {\n      id\n      name\n      email\n      phone\n    }\n  }\n":
    types.CreateInquiryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query UserProject($userProjectId: ID!) {\n    userProject(id: $userProjectId) {\n      id\n      name\n      configuration\n      brochure\n      address\n      startingPrice\n      possesionDate\n      reraNumber\n      coverImage\n      carpetAreaRange {\n        max\n        min\n      }\n      builtUpAreaRange {\n        max\n        min\n      }\n      status\n      type\n  \n      developer {\n        id\n        description\n        logo\n        name\n        projects {\n          pageInfo {\n            totalCount\n          }\n        }\n      }\n      images {\n        projectImages {\n          id\n          url\n        }\n      }\n      amenities {\n        amenities {\n          id\n          name\n          icon\n        }\n      }\n      description\n      properties {\n        properties {\n          id\n          plotArea\n          carpetArea\n          builtupArea\n          price\n          propertyType {\n            name\n          }\n          vastuCompliant\n          superBuiltupArea\n          configuration {\n            name\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query UserProject($userProjectId: ID!) {\n    userProject(id: $userProjectId) {\n      id\n      name\n      configuration\n      brochure\n      address\n      startingPrice\n      possesionDate\n      reraNumber\n      coverImage\n      carpetAreaRange {\n        max\n        min\n      }\n      builtUpAreaRange {\n        max\n        min\n      }\n      status\n      type\n  \n      developer {\n        id\n        description\n        logo\n        name\n        projects {\n          pageInfo {\n            totalCount\n          }\n        }\n      }\n      images {\n        projectImages {\n          id\n          url\n        }\n      }\n      amenities {\n        amenities {\n          id\n          name\n          icon\n        }\n      }\n      description\n      properties {\n        properties {\n          id\n          plotArea\n          carpetArea\n          builtupArea\n          price\n          propertyType {\n            name\n          }\n          vastuCompliant\n          superBuiltupArea\n          configuration {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query PropertiesListing($limit: Int, $page: Int, $filters: ListingFilterInputType, $sortBy: ListingSortType) {\n    listing(limit: $limit, page: $page, filters: $filters, sortBy: $sortBy) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n      }\n      pageInfo {\n        isFirstPage\n        isLastPage\n        currentPage\n        previousPage\n        nextPage\n        pageCount\n        totalCount\n      }\n    }\n  }\n",
): (typeof documents)["\n  query PropertiesListing($limit: Int, $page: Int, $filters: ListingFilterInputType, $sortBy: ListingSortType) {\n    listing(limit: $limit, page: $page, filters: $filters, sortBy: $sortBy) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n      }\n      pageInfo {\n        isFirstPage\n        isLastPage\n        currentPage\n        previousPage\n        nextPage\n        pageCount\n        totalCount\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query FeaturedDevelopers(\n    $limit: Int\n    $page: Int\n    $filters: ProjectFilterInputType\n  ) {\n    featuredDevelopers(limit: $limit, page: $page) {\n      developers {\n        id\n        name\n        slug\n        logo\n        description\n        isFeatured\n        projects(filters: $filters) {\n          pageInfo {\n            totalCount\n          }\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n",
): (typeof documents)["\n  query FeaturedDevelopers(\n    $limit: Int\n    $page: Int\n    $filters: ProjectFilterInputType\n  ) {\n    featuredDevelopers(limit: $limit, page: $page) {\n      developers {\n        id\n        name\n        slug\n        logo\n        description\n        isFeatured\n        projects(filters: $filters) {\n          pageInfo {\n            totalCount\n          }\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query FeaturedProjects($limit: Int = 4) {\n    featuredProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n",
): (typeof documents)["\n  query FeaturedProjects($limit: Int = 4) {\n    featuredProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query NewProjects($limit: Int = 4) {\n    newProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n",
): (typeof documents)["\n  query NewProjects($limit: Int = 4) {\n    newProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query TopLocalities($limit: Int = 3) {\n    topLocalities(limit: $limit) {\n      localities {\n        id\n        name\n        image\n        projects {\n          pageInfo {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query TopLocalities($limit: Int = 3) {\n    topLocalities(limit: $limit) {\n      localities {\n        id\n        name\n        image\n        projects {\n          pageInfo {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query TrendingProjects($limit: Int = 4) {\n    trendingProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n",
): (typeof documents)["\n  query TrendingProjects($limit: Int = 4) {\n    trendingProjects(limit: $limit) {\n      projects {\n        id\n        name\n        status\n        configuration\n        address\n        startingPrice\n        possesionDate\n        carpetAreaRange {\n          min\n          max\n        }\n        builtUpAreaRange {\n          min\n          max\n        }\n        type\n        coverImage\n        reraNumber\n        brochure\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query Search($term: String!, $limit: Int) {\n    search(term: $term, limit: $limit) {\n      results {\n        id\n        name\n        type\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Search($term: String!, $limit: Int) {\n    search(term: $term, limit: $limit) {\n      results {\n        id\n        name\n        type\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation CreateInquiry(\n    $projectId: ID!\n    $name: String!\n    $email: String!\n    $phone: String!\n    $getWhatsappUpdates: Boolean\n    $allowOtherSellersToContact: Boolean\n  ) {\n    createInquiry(\n      projectId: $projectId\n      name: $name\n      email: $email\n      phone: $phone\n      getWhatsappUpdates: $getWhatsappUpdates\n      allowOtherSellersToContact: $allowOtherSellersToContact\n    ) {\n      id\n      name\n      email\n      phone\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateInquiry(\n    $projectId: ID!\n    $name: String!\n    $email: String!\n    $phone: String!\n    $getWhatsappUpdates: Boolean\n    $allowOtherSellersToContact: Boolean\n  ) {\n    createInquiry(\n      projectId: $projectId\n      name: $name\n      email: $email\n      phone: $phone\n      getWhatsappUpdates: $getWhatsappUpdates\n      allowOtherSellersToContact: $allowOtherSellersToContact\n    ) {\n      id\n      name\n      email\n      phone\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
