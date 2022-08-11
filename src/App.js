import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';

function App() {
  const isLoggedIn = true;
  return (
    <div>
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
    </div>
  );
}

export default App;
