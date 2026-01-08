/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export type AddressType = {
  __typename?: "AddressType";
  addressLine1: Scalars["String"]["output"];
  addressLine2?: Maybe<Scalars["String"]["output"]>;
  city: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  googlePin: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
  pincode: Scalars["String"]["output"];
  project: ProjectType;
  state: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type AddressesType = {
  __typename?: "AddressesType";
  addresses: Array<AddressType>;
  pageInfo: PaginationType;
};

export type AmenitiesType = {
  __typename?: "AmenitiesType";
  amenities: Array<AmenityType>;
  pageInfo: PaginationType;
};

export type AmenityFilterInputType = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type AmenityType = {
  __typename?: "AmenityType";
  createdAt: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  icon: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  projects: ProjectsType;
  slug: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type AmenityTypeProjectsArgs = {
  filters?: InputMaybe<ProjectFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum AreasAllowedEnumType {
  Builtup = "BUILTUP",
  Carpet = "CARPET",
  Plot = "PLOT",
  SuperBuiltup = "SUPER_BUILTUP",
}

export type AuthPayloadType = {
  __typename?: "AuthPayloadType";
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserType>;
};

export type CommentType = {
  __typename?: "CommentType";
  author: UserType;
  content: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  inquiry: InquiryType;
  parentComment?: Maybe<CommentType>;
  replies: CommentsType;
  updatedAt: Scalars["String"]["output"];
};

export type CommentTypeRepliesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentsType = {
  __typename?: "CommentsType";
  comments: Array<CommentType>;
  pageInfo: PaginationType;
};

export type ConfigurationFilterInputType = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type ConfigurationType = {
  __typename?: "ConfigurationType";
  createdAt: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  properties: PropertiesType;
  slug: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type ConfigurationTypePropertiesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ConfigurationsType = {
  __typename?: "ConfigurationsType";
  configurations: Array<ConfigurationType>;
  pageInfo: PaginationType;
};

export type DeveloperFilterInputType = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type DeveloperType = {
  __typename?: "DeveloperType";
  createdAt: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isFeatured: Scalars["Boolean"]["output"];
  logo: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  projects: ProjectsType;
  slug: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type DeveloperTypeProjectsArgs = {
  filters?: InputMaybe<ProjectFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DevelopersType = {
  __typename?: "DevelopersType";
  developers: Array<DeveloperType>;
  pageInfo: PaginationType;
};

export type ForgotPassword = {
  __typename?: "ForgotPassword";
  message?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type InquiriesType = {
  __typename?: "InquiriesType";
  inquiries: Array<InquiryType>;
  pageInfo: PaginationType;
};

export type InquiryFilterInputType = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export enum InquiryStatusEnumType {
  Contacted = "CONTACTED",
  NotInterested = "NOT_INTERESTED",
  Pending = "PENDING",
}

export type InquiryType = {
  __typename?: "InquiryType";
  allowOtherSellersToContact: Scalars["Boolean"]["output"];
  assignedTo?: Maybe<UserType>;
  comments: CommentsType;
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  getWhatsappUpdates: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  project: ProjectType;
  status: InquiryStatusEnumType;
  updatedAt: Scalars["String"]["output"];
};

export type InquiryTypeCommentsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ListingFilterInputType = {
  amenities?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  budget?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  developerIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  isTrending?: InputMaybe<Scalars["Boolean"]["input"]>;
  localityIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  possession?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<ProjectStatusEnumType>;
};

export enum ListingSortType {
  NewestFirst = "NEWEST_FIRST",
  PossessionDate = "POSSESSION_DATE",
  PriceHighToLow = "PRICE_HIGH_TO_LOW",
  PriceLowToHigh = "PRICE_LOW_TO_HIGH",
  Relevance = "RELEVANCE",
}

export type LocalitiesType = {
  __typename?: "LocalitiesType";
  localities: Array<LocalityType>;
  pageInfo: PaginationType;
};

export type LocalityFilterInputType = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type LocalityType = {
  __typename?: "LocalityType";
  createdAt: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  isTop: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  nearByLocalities: LocalitiesType;
  projects: ProjectsType;
  slug: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type LocalityTypeNearByLocalitiesArgs = {
  filters?: InputMaybe<LocalityFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LocalityTypeProjectsArgs = {
  filters?: InputMaybe<ProjectFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  acceptUserInvite?: Maybe<AuthPayloadType>;
  connectAmenitiesToProject: ProjectType;
  createAddress: AddressType;
  createAmenity: AmenityType;
  createBulkProjectImages: Array<ProjectImageType>;
  createComment: CommentType;
  createConfiguration: ConfigurationType;
  createDeveloper: DeveloperType;
  createInquiry: InquiryType;
  createLocality: LocalityType;
  createProject: ProjectType;
  createProjectImage: ProjectImageType;
  createProjectType: ProjectTypeType;
  createProperty: PropertyType;
  createPropertyType: PropertyTypeType;
  createUser?: Maybe<UserType>;
  deleteAddress: AddressType;
  deleteAmenity: AmenityType;
  deleteComment: CommentType;
  deleteConfiguration: ConfigurationType;
  deleteDeveloper: DeveloperType;
  deleteInquiry: InquiryType;
  deleteLocality: LocalityType;
  deleteProject: ProjectType;
  deleteProjectImage: ProjectImageType;
  deleteProjectType: ProjectTypeType;
  deleteProperty: PropertyType;
  deletePropertyType: PropertyTypeType;
  disconnectAmenityFromProject: ProjectType;
  forgotPassword?: Maybe<ForgotPassword>;
  login?: Maybe<AuthPayloadType>;
  removeUser?: Maybe<UserType>;
  resetPassword?: Maybe<ForgotPassword>;
  signup?: Maybe<AuthPayloadType>;
  updateAddress: AddressType;
  updateAmenity: AmenityType;
  updateComment: CommentType;
  updateConfiguration: ConfigurationType;
  updateDeveloper: DeveloperType;
  updateInquiry: InquiryType;
  updateLocality: LocalityType;
  updateProject: ProjectType;
  updateProjectType: ProjectTypeType;
  updateProperty: PropertyType;
  updatePropertyType: PropertyTypeType;
};

export type MutationAcceptUserInviteArgs = {
  inviteToken: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationConnectAmenitiesToProjectArgs = {
  amenityIds: Array<Scalars["ID"]["input"]>;
  projectId: Scalars["ID"]["input"];
};

export type MutationCreateAddressArgs = {
  addressLine1: Scalars["String"]["input"];
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  googlePin: Scalars["String"]["input"];
  latitude: Scalars["Float"]["input"];
  longitude: Scalars["Float"]["input"];
  pincode: Scalars["String"]["input"];
  projectId: Scalars["ID"]["input"];
  state: Scalars["String"]["input"];
};

export type MutationCreateAmenityArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon: Scalars["Upload"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationCreateBulkProjectImagesArgs = {
  files: Array<Scalars["Upload"]["input"]>;
  projectId: Scalars["ID"]["input"];
};

export type MutationCreateCommentArgs = {
  authorId: Scalars["ID"]["input"];
  content: Scalars["String"]["input"];
  inquiryId: Scalars["ID"]["input"];
  parentCommentId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationCreateConfigurationArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationCreateDeveloperArgs = {
  description: Scalars["String"]["input"];
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  logo: Scalars["Upload"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationCreateInquiryArgs = {
  allowOtherSellersToContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  assignedToId?: InputMaybe<Scalars["ID"]["input"]>;
  email: Scalars["String"]["input"];
  getWhatsappUpdates?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  projectId: Scalars["ID"]["input"];
  status?: InputMaybe<InquiryStatusEnumType>;
};

export type MutationCreateLocalityArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  image: Scalars["Upload"]["input"];
  isTop?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationCreateProjectArgs = {
  brochure: Scalars["Upload"]["input"];
  description: Scalars["String"]["input"];
  developerId: Scalars["ID"]["input"];
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  isTrending?: InputMaybe<Scalars["Boolean"]["input"]>;
  launchDate?: InputMaybe<Scalars["String"]["input"]>;
  localityId: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
  possessionDate?: InputMaybe<Scalars["String"]["input"]>;
  projectTypeId: Scalars["ID"]["input"];
  reraNumber?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<ProjectStatusEnumType>;
};

export type MutationCreateProjectImageArgs = {
  file: Scalars["Upload"]["input"];
  projectId: Scalars["ID"]["input"];
};

export type MutationCreateProjectTypeArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationCreatePropertyArgs = {
  builtupArea?: InputMaybe<Scalars["Float"]["input"]>;
  carpetArea?: InputMaybe<Scalars["Float"]["input"]>;
  configurationId: Scalars["ID"]["input"];
  plotArea?: InputMaybe<Scalars["Float"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  projectId: Scalars["ID"]["input"];
  propertyTypeId: Scalars["ID"]["input"];
  superBuiltupArea?: InputMaybe<Scalars["Float"]["input"]>;
  vastuCompliant?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreatePropertyTypeArgs = {
  allowedAreas?: InputMaybe<Array<AreasAllowedEnumType>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
};

export type MutationDeleteAddressArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteAmenityArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteConfigurationArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteDeveloperArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteInquiryArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteLocalityArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteProjectArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteProjectImageArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteProjectTypeArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeletePropertyArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeletePropertyTypeArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDisconnectAmenityFromProjectArgs = {
  amenityId: Scalars["ID"]["input"];
  projectId: Scalars["ID"]["input"];
};

export type MutationForgotPasswordArgs = {
  callBackUrl: Scalars["String"]["input"];
  emailId: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRemoveUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationResetPasswordArgs = {
  email: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
  oldPassword: Scalars["String"]["input"];
};

export type MutationSignupArgs = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationUpdateAddressArgs = {
  addressLine1?: InputMaybe<Scalars["String"]["input"]>;
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  googlePin?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  latitude?: InputMaybe<Scalars["Float"]["input"]>;
  longitude?: InputMaybe<Scalars["Float"]["input"]>;
  pincode?: InputMaybe<Scalars["String"]["input"]>;
  projectId?: InputMaybe<Scalars["ID"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateAmenityArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["Upload"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateCommentArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateConfigurationArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateDeveloperArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  logo?: InputMaybe<Scalars["Upload"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateInquiryArgs = {
  allowOtherSellersToContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  assignedToId?: InputMaybe<Scalars["ID"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  getWhatsappUpdates?: InputMaybe<Scalars["Boolean"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  projectId?: InputMaybe<Scalars["ID"]["input"]>;
  status?: InputMaybe<InquiryStatusEnumType>;
};

export type MutationUpdateLocalityArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  image?: InputMaybe<Scalars["Upload"]["input"]>;
  isTop?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateProjectArgs = {
  brochure?: InputMaybe<Scalars["Upload"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  developerId?: InputMaybe<Scalars["ID"]["input"]>;
  id: Scalars["ID"]["input"];
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  isTrending?: InputMaybe<Scalars["Boolean"]["input"]>;
  launchDate?: InputMaybe<Scalars["String"]["input"]>;
  localityId?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  possessionDate?: InputMaybe<Scalars["String"]["input"]>;
  projectTypeId?: InputMaybe<Scalars["ID"]["input"]>;
  reraNumber?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<ProjectStatusEnumType>;
};

export type MutationUpdateProjectTypeArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdatePropertyArgs = {
  builtupArea?: InputMaybe<Scalars["Float"]["input"]>;
  carpetArea?: InputMaybe<Scalars["Float"]["input"]>;
  configurationId?: InputMaybe<Scalars["ID"]["input"]>;
  id: Scalars["ID"]["input"];
  plotArea?: InputMaybe<Scalars["Float"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  projectId?: InputMaybe<Scalars["ID"]["input"]>;
  propertyTypeId?: InputMaybe<Scalars["ID"]["input"]>;
  superBuiltupArea?: InputMaybe<Scalars["Float"]["input"]>;
  vastuCompliant?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationUpdatePropertyTypeArgs = {
  allowedAreas?: InputMaybe<Array<AreasAllowedEnumType>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaginationType = {
  __typename?: "PaginationType";
  currentPage: Scalars["Int"]["output"];
  isFirstPage: Scalars["Boolean"]["output"];
  isLastPage: Scalars["Boolean"]["output"];
  nextPage?: Maybe<Scalars["Int"]["output"]>;
  pageCount: Scalars["Int"]["output"];
  previousPage?: Maybe<Scalars["Int"]["output"]>;
  totalCount: Scalars["Int"]["output"];
};

export type ProjectFilterInputType = {
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  isTrending?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<ProjectStatusEnumType>;
};

export type ProjectImageType = {
  __typename?: "ProjectImageType";
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  project: ProjectType;
  updatedAt: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type ProjectImagesType = {
  __typename?: "ProjectImagesType";
  pageInfo: PaginationType;
  projectImages: Array<ProjectImageType>;
};

export enum ProjectStatusEnumType {
  Completed = "COMPLETED",
  NewLaunch = "NEW_LAUNCH",
  OnHold = "ON_HOLD",
  ReadyToMove = "READY_TO_MOVE",
  UnderConstruction = "UNDER_CONSTRUCTION",
  Upcoming = "UPCOMING",
}

export type ProjectType = {
  __typename?: "ProjectType";
  address?: Maybe<AddressType>;
  amenities: AmenitiesType;
  brochure: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  developer: DeveloperType;
  id: Scalars["ID"]["output"];
  inquiries: InquiriesType;
  isFeatured: Scalars["Boolean"]["output"];
  isTrending: Scalars["Boolean"]["output"];
  launchDate: Scalars["String"]["output"];
  locality: LocalityType;
  name: Scalars["String"]["output"];
  possessionDate: Scalars["String"]["output"];
  projectImages: ProjectImagesType;
  projectType: ProjectTypeType;
  properties: PropertiesType;
  reraNumber?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
  status: ProjectStatusEnumType;
  updatedAt: Scalars["String"]["output"];
};

export type ProjectTypeAmenitiesArgs = {
  filters?: InputMaybe<AmenityFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectTypeInquiriesArgs = {
  filters?: InputMaybe<InquiryFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectTypeProjectImagesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectTypePropertiesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectTypeFilterInputType = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectTypeType = {
  __typename?: "ProjectTypeType";
  createdAt: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  projects: ProjectsType;
  slug: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type ProjectTypeTypeProjectsArgs = {
  filters?: InputMaybe<ProjectFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectTypesType = {
  __typename?: "ProjectTypesType";
  pageInfo: PaginationType;
  projectTypes: Array<ProjectTypeType>;
};

export type ProjectUserType = {
  __typename?: "ProjectUserType";
  address: Scalars["String"]["output"];
  amenities: AmenitiesType;
  brochure: Scalars["String"]["output"];
  builtUpAreaRange: RangeType;
  carpetAreaRange: RangeType;
  configuration: Scalars["String"]["output"];
  coverImage?: Maybe<Scalars["String"]["output"]>;
  description: Scalars["String"]["output"];
  developer: DeveloperType;
  id: Scalars["ID"]["output"];
  images: ProjectImagesType;
  name: Scalars["String"]["output"];
  possesionDate: Scalars["String"]["output"];
  properties: PropertiesType;
  reraNumber?: Maybe<Scalars["String"]["output"]>;
  startingPrice: Scalars["Int"]["output"];
  status: ProjectStatusEnumType;
  type: Scalars["String"]["output"];
};

export type ProjectsType = {
  __typename?: "ProjectsType";
  pageInfo: PaginationType;
  projects: Array<ProjectType>;
};

export type ProjectsUserType = {
  __typename?: "ProjectsUserType";
  pageInfo: PaginationType;
  projects: Array<ProjectUserType>;
};

export type PropertiesType = {
  __typename?: "PropertiesType";
  pageInfo: PaginationType;
  properties: Array<PropertyType>;
};

export type PropertyFilterInputType = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type PropertyType = {
  __typename?: "PropertyType";
  builtupArea?: Maybe<Scalars["Float"]["output"]>;
  carpetArea?: Maybe<Scalars["Float"]["output"]>;
  configuration: ConfigurationType;
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  plotArea?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  project: ProjectType;
  propertyType: PropertyTypeType;
  superBuiltupArea?: Maybe<Scalars["Float"]["output"]>;
  updatedAt: Scalars["String"]["output"];
  vastuCompliant?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PropertyTypeFilterInputType = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type PropertyTypeType = {
  __typename?: "PropertyTypeType";
  allowedAreas: Array<AreasAllowedEnumType>;
  createdAt: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  properties: PropertiesType;
  slug: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type PropertyTypeTypePropertiesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PropertyTypesType = {
  __typename?: "PropertyTypesType";
  pageInfo: PaginationType;
  propertyTypes: Array<PropertyTypeType>;
};

export type Query = {
  __typename?: "Query";
  address?: Maybe<AddressType>;
  addresses: AddressesType;
  amenities: AmenitiesType;
  amenity?: Maybe<AmenityType>;
  comment?: Maybe<CommentType>;
  comments: CommentsType;
  commentsByAuthor: CommentsType;
  commentsByInquiry: CommentsType;
  configuration?: Maybe<ConfigurationType>;
  configurations: ConfigurationsType;
  developer?: Maybe<DeveloperType>;
  developers: DevelopersType;
  featuredDevelopers: DevelopersType;
  featuredProjects: ProjectsUserType;
  inquiries: InquiriesType;
  inquiry?: Maybe<InquiryType>;
  listing: ProjectsUserType;
  localities: LocalitiesType;
  locality?: Maybe<LocalityType>;
  newProjects: ProjectsUserType;
  project?: Maybe<ProjectType>;
  projectImage?: Maybe<ProjectImageType>;
  projectImages: ProjectImagesType;
  projectType?: Maybe<ProjectTypeType>;
  projectTypes: ProjectTypesType;
  projects: ProjectsType;
  properties: PropertiesType;
  property?: Maybe<PropertyType>;
  propertyType?: Maybe<PropertyTypeType>;
  propertyTypes: PropertyTypesType;
  search: SearchResultsType;
  topLocalities: LocalitiesType;
  trendingProjects: ProjectsUserType;
  user: UserType;
  userProject: ProjectUserType;
  users: UsersType;
};

export type QueryAddressArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAddressesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryAmenitiesArgs = {
  filters?: InputMaybe<AmenityFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryAmenityArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCommentsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCommentsByAuthorArgs = {
  authorId: Scalars["ID"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCommentsByInquiryArgs = {
  inquiryId: Scalars["ID"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryConfigurationArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryConfigurationsArgs = {
  filters?: InputMaybe<ConfigurationFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryDeveloperArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDevelopersArgs = {
  filters?: InputMaybe<DeveloperFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFeaturedDevelopersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFeaturedProjectsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryInquiriesArgs = {
  filters?: InputMaybe<InquiryFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryInquiryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryListingArgs = {
  filters?: InputMaybe<ListingFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<ListingSortType>;
};

export type QueryLocalitiesArgs = {
  filters?: InputMaybe<LocalityFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLocalityArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryNewProjectsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProjectArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProjectImageArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProjectImagesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProjectTypeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProjectTypesArgs = {
  filters?: InputMaybe<ProjectTypeFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPropertiesArgs = {
  filters?: InputMaybe<PropertyFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPropertyArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPropertyTypeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPropertyTypesArgs = {
  filters?: InputMaybe<PropertyTypeFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuerySearchArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  term: Scalars["String"]["input"];
};

export type QueryTopLocalitiesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTrendingProjectsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserProjectArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
  filters?: InputMaybe<UserFilterInputType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortType?: InputMaybe<SortTypeEnumType>;
};

export type RangeType = {
  __typename?: "RangeType";
  max: Scalars["Int"]["output"];
  min: Scalars["Int"]["output"];
};

export type SearchResultType = {
  __typename?: "SearchResultType";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  type: SearchResultTypeEnum;
};

export enum SearchResultTypeEnum {
  Developer = "DEVELOPER",
  Locality = "LOCALITY",
  Project = "PROJECT",
}

export type SearchResultsType = {
  __typename?: "SearchResultsType";
  results: Array<SearchResultType>;
};

export enum SortTypeEnumType {
  Ascending = "ASCENDING",
  Descending = "DESCENDING",
}

export type UserFilterInputType = {
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserType = {
  __typename?: "UserType";
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  leadAssigned: InquiriesType;
  leadComments: CommentsType;
  updatedAt: Scalars["String"]["output"];
};

export type UserTypeLeadAssignedArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserTypeLeadCommentsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UsersType = {
  __typename?: "UsersType";
  nodes: Array<UserType>;
  pageInfo: PaginationType;
};

export type UserProjectQueryVariables = Exact<{
  userProjectId: Scalars["ID"]["input"];
}>;

export type UserProjectQuery = {
  __typename?: "Query";
  userProject: {
    __typename?: "ProjectUserType";
    id: string;
    name: string;
    configuration: string;
    brochure: string;
    address: string;
    startingPrice: number;
    possesionDate: string;
    reraNumber?: string | null;
    coverImage?: string | null;
    status: ProjectStatusEnumType;
    type: string;
    description: string;
    carpetAreaRange: { __typename?: "RangeType"; max: number; min: number };
    builtUpAreaRange: { __typename?: "RangeType"; max: number; min: number };
    developer: {
      __typename?: "DeveloperType";
      id: string;
      description: string;
      logo: string;
      name: string;
      projects: {
        __typename?: "ProjectsType";
        pageInfo: { __typename?: "PaginationType"; totalCount: number };
      };
    };
    images: {
      __typename?: "ProjectImagesType";
      projectImages: Array<{
        __typename?: "ProjectImageType";
        id: string;
        url: string;
      }>;
    };
    amenities: {
      __typename?: "AmenitiesType";
      amenities: Array<{
        __typename?: "AmenityType";
        id: string;
        name: string;
        icon: string;
      }>;
    };
    properties: {
      __typename?: "PropertiesType";
      properties: Array<{
        __typename?: "PropertyType";
        id: string;
        plotArea?: number | null;
        carpetArea?: number | null;
        builtupArea?: number | null;
        price?: number | null;
        vastuCompliant?: boolean | null;
        superBuiltupArea?: number | null;
        propertyType: { __typename?: "PropertyTypeType"; name: string };
        configuration: { __typename?: "ConfigurationType"; name: string };
      }>;
    };
  };
};

export type PropertiesListingQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  filters?: InputMaybe<ListingFilterInputType>;
  sortBy?: InputMaybe<ListingSortType>;
}>;

export type PropertiesListingQuery = {
  __typename?: "Query";
  listing: {
    __typename?: "ProjectsUserType";
    projects: Array<{
      __typename?: "ProjectUserType";
      id: string;
      name: string;
      status: ProjectStatusEnumType;
      configuration: string;
      address: string;
      startingPrice: number;
      possesionDate: string;
      type: string;
      coverImage?: string | null;
      reraNumber?: string | null;
      carpetAreaRange: { __typename?: "RangeType"; min: number; max: number };
      builtUpAreaRange: { __typename?: "RangeType"; min: number; max: number };
    }>;
    pageInfo: {
      __typename?: "PaginationType";
      isFirstPage: boolean;
      isLastPage: boolean;
      currentPage: number;
      previousPage?: number | null;
      nextPage?: number | null;
      pageCount: number;
      totalCount: number;
    };
  };
};

export type FeaturedDevelopersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  filters?: InputMaybe<ProjectFilterInputType>;
}>;

export type FeaturedDevelopersQuery = {
  __typename?: "Query";
  featuredDevelopers: {
    __typename?: "DevelopersType";
    developers: Array<{
      __typename?: "DeveloperType";
      id: string;
      name: string;
      slug: string;
      logo: string;
      description: string;
      isFeatured: boolean;
      createdAt: string;
      updatedAt: string;
      projects: {
        __typename?: "ProjectsType";
        pageInfo: { __typename?: "PaginationType"; totalCount: number };
      };
    }>;
  };
};

export type FeaturedProjectsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type FeaturedProjectsQuery = {
  __typename?: "Query";
  featuredProjects: {
    __typename?: "ProjectsUserType";
    projects: Array<{
      __typename?: "ProjectUserType";
      id: string;
      name: string;
      status: ProjectStatusEnumType;
      configuration: string;
      address: string;
      startingPrice: number;
      possesionDate: string;
      type: string;
      coverImage?: string | null;
      reraNumber?: string | null;
      brochure: string;
      carpetAreaRange: { __typename?: "RangeType"; min: number; max: number };
      builtUpAreaRange: { __typename?: "RangeType"; min: number; max: number };
    }>;
  };
};

export type NewProjectsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type NewProjectsQuery = {
  __typename?: "Query";
  newProjects: {
    __typename?: "ProjectsUserType";
    projects: Array<{
      __typename?: "ProjectUserType";
      id: string;
      name: string;
      status: ProjectStatusEnumType;
      configuration: string;
      address: string;
      startingPrice: number;
      possesionDate: string;
      type: string;
      coverImage?: string | null;
      reraNumber?: string | null;
      brochure: string;
      carpetAreaRange: { __typename?: "RangeType"; min: number; max: number };
      builtUpAreaRange: { __typename?: "RangeType"; min: number; max: number };
    }>;
  };
};

export type TopLocalitiesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type TopLocalitiesQuery = {
  __typename?: "Query";
  topLocalities: {
    __typename?: "LocalitiesType";
    localities: Array<{
      __typename?: "LocalityType";
      id: string;
      name: string;
      image: string;
      projects: {
        __typename?: "ProjectsType";
        pageInfo: { __typename?: "PaginationType"; totalCount: number };
      };
    }>;
  };
};

export type TrendingProjectsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type TrendingProjectsQuery = {
  __typename?: "Query";
  trendingProjects: {
    __typename?: "ProjectsUserType";
    projects: Array<{
      __typename?: "ProjectUserType";
      id: string;
      name: string;
      status: ProjectStatusEnumType;
      configuration: string;
      address: string;
      startingPrice: number;
      possesionDate: string;
      type: string;
      coverImage?: string | null;
      reraNumber?: string | null;
      brochure: string;
      carpetAreaRange: { __typename?: "RangeType"; min: number; max: number };
      builtUpAreaRange: { __typename?: "RangeType"; min: number; max: number };
    }>;
  };
};

export type SearchQueryVariables = Exact<{
  term: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type SearchQuery = {
  __typename?: "Query";
  search: {
    __typename?: "SearchResultsType";
    results: Array<{
      __typename?: "SearchResultType";
      id: string;
      name: string;
      type: SearchResultTypeEnum;
    }>;
  };
};

export type CreateInquiryMutationVariables = Exact<{
  projectId: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  getWhatsappUpdates?: InputMaybe<Scalars["Boolean"]["input"]>;
  allowOtherSellersToContact?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type CreateInquiryMutation = {
  __typename?: "Mutation";
  createInquiry: {
    __typename?: "InquiryType";
    id: string;
    name: string;
    email: string;
    phone: string;
  };
};

export const UserProjectDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UserProject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userProjectId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userProject" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userProjectId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "configuration" },
                },
                { kind: "Field", name: { kind: "Name", value: "brochure" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startingPrice" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "possesionDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "reraNumber" } },
                { kind: "Field", name: { kind: "Name", value: "coverImage" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "carpetAreaRange" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "max" } },
                      { kind: "Field", name: { kind: "Name", value: "min" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "builtUpAreaRange" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "max" } },
                      { kind: "Field", name: { kind: "Name", value: "min" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "developer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "logo" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "projects" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageInfo" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalCount" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "images" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "projectImages" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenities" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "icon" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "properties" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "properties" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "plotArea" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "carpetArea" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "builtupArea" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "propertyType" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "vastuCompliant" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "superBuiltupArea" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "configuration" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserProjectQuery, UserProjectQueryVariables>;
export const PropertiesListingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PropertiesListing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ListingFilterInputType" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sortBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ListingSortType" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sortBy" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startingPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "possesionDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "carpetAreaRange" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "min" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "builtUpAreaRange" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "min" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverImage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "reraNumber" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isFirstPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isLastPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "currentPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "previousPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageCount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalCount" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PropertiesListingQuery,
  PropertiesListingQueryVariables
>;
export const FeaturedDevelopersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FeaturedDevelopers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ProjectFilterInputType" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "featuredDevelopers" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "developers" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "logo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isFeatured" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "projects" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "filters" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "filters" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageInfo" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalCount" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FeaturedDevelopersQuery,
  FeaturedDevelopersQueryVariables
>;
export const FeaturedProjectsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FeaturedProjects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "4" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "featuredProjects" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startingPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "possesionDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "carpetAreaRange" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "min" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "builtUpAreaRange" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "min" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverImage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "reraNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "brochure" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FeaturedProjectsQuery,
  FeaturedProjectsQueryVariables
>;
export const NewProjectsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "NewProjects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "4" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "newProjects" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startingPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "possesionDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "carpetAreaRange" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "min" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "builtUpAreaRange" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "min" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverImage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "reraNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "brochure" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NewProjectsQuery, NewProjectsQueryVariables>;
export const TopLocalitiesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TopLocalities" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "3" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "topLocalities" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "localities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "image" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "projects" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageInfo" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalCount" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TopLocalitiesQuery, TopLocalitiesQueryVariables>;
export const TrendingProjectsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TrendingProjects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "4" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "trendingProjects" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "configuration" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startingPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "possesionDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "carpetAreaRange" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "min" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "builtUpAreaRange" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "min" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverImage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "reraNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "brochure" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TrendingProjectsQuery,
  TrendingProjectsQueryVariables
>;
export const SearchDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Search" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "term" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "search" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "term" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "term" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;
export const CreateInquiryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateInquiry" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "projectId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phone" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "getWhatsappUpdates" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "allowOtherSellersToContact" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createInquiry" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "projectId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "projectId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "phone" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "phone" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "getWhatsappUpdates" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "getWhatsappUpdates" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "allowOtherSellersToContact" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "allowOtherSellersToContact" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateInquiryMutation,
  CreateInquiryMutationVariables
>;
