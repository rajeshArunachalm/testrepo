"use client";

import { ApolloProvider } from "@apollo/client/react";
import type { PropsWithChildren } from "react";

import { getApolloClient } from "@/lib/apollo-client";

export default function Provider({ children }: PropsWithChildren) {
  const client = getApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
