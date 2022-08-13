import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import routes from './routes';

const TOKEN = 'TOKEN';
const DARK_MODE = 'DARK_MODE';

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

export const darkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === 'enabled')
);

export const enableDarkMode = () => {
  localStorage.setItem('DARK_MODE', 'enabled');
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem('DARK_MODE');
  darkModeVar(false);
};

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // apollo가 가져온 정보를 기억
  cache: new InMemoryCache(),
});
