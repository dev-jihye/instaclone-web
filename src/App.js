import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkModeVar, isLoggedInVar } from './apollo';
import routes from './routes';
import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import SignUp from './screens/SignUp';
import { darkTheme, GlobalStyles, lightTheme } from './styles';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          {isLoggedIn ? (
            <Route path={routes.home} element={<Home />}></Route>
          ) : (
            <Route path={routes.home} element={<Login />}></Route>
          )}
          {!isLoggedIn ? (
            <Route path={routes.signUp} element={<SignUp />}></Route>
          ) : null}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
