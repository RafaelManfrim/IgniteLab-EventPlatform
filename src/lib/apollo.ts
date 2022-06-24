import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4swfntp2n3601z1c76553nx/master',
  cache: new InMemoryCache()
});
