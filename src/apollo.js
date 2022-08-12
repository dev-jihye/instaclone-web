import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // apollo가 가져온 정보를 기억
  cache: new InMemoryCache(),
});
