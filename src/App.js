import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkModeVar, isLoggedInVar } from './apollo';
import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
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
            <Route path="/" element={<Home />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
