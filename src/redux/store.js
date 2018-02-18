import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createStore, applyMiddleware } from 'redux';
import { navMiddleware } from './middleware/Nav.middleware';
import { config } from './../../config';
import { appReducer } from './reducers/App.reducer';

export const client = new ApolloClient({
  link: new HttpLink({ uri: `${config.host}:${config.port}/graphql` }),
  cache: new InMemoryCache()
});

export const store = createStore(
  appReducer,
  applyMiddleware(navMiddleware),
);
