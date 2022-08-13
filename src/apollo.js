import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import routes from './routes';

const TOKEN = 'token';
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = (navigate) => {
  localStorage.removeItem(TOKEN);
  navigate(routes.home, { replace: true });
  isLoggedInVar(false);
};

export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // apollo가 가져온 정보를 기억
  cache: new InMemoryCache(),
});
