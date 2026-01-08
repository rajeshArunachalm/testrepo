import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { env } from "@/env/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({ uri: env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL }),
  cache: new InMemoryCache(),
});

export function getApolloClient() {
  return client;
}
