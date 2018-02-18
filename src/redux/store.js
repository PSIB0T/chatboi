import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { config } from './../../config';

export const client = new ApolloClient({
  link: new HttpLink({ uri: `${config.host}:${config.port}/graphql` }),
  cache: new InMemoryCache()
});
