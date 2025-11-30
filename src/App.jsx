import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Favorites from './pages/Favorites/Favorites';
import Character from './pages/Character';
import Comic from './pages/Comic';
import NotFound from './pages/NotFound/NotFound';
import {useState} from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/characters"
            element={<Characters favorites={favorites} />}
          />
          <Route path="/comics" element={<Comics />} />
          <Route
            path="/comics/:characterId"
            element={
              <Character setFavorites={setFavorites} favorites={favorites} />
            }
          />
          <Route path="/comic/:comicId" element={<Comic />} />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
