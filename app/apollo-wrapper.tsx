'use client'

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import { ReactNode } from 'react'

const graphqlApiUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_URL

if (!graphqlApiUrl) {
  throw new Error('NEXT_PUBLIC_GRAPHQL_API_URL environment variable is not set. Please configure it in your .env file.')
}

const httpLink = new HttpLink({
  uri: graphqlApiUrl,
  headers: {
    'Content-Type': 'application/json',
    'apollo-require-preflight': 'true',
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

export function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

