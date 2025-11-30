import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Comics from './pages/Comics/Comics';
import Favorites from './pages/Favorites/Favorites';
import Character from './pages/Character/Character';
import Comic from './pages/Comic/Comic';
import NotFound from './pages/NotFound/NotFound';
import {useState, useEffect} from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = () => {
      try {
        const stored = localStorage.getItem('marvelFavorites');
        if (stored) {
          const parsed = JSON.parse(stored);
          setFavorites(parsed);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getFavorites();
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('marvelFavorites', JSON.stringify(favorites));
    }
  }, [favorites]);

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
            path="/character/:characterId"
            element={
              <Character setFavorites={setFavorites} favorites={favorites} />
            }
          />
          <Route
            path="/comic/:comicId"
            element={
              <Comic favorites={favorites} setFavorites={setFavorites} />
            }
          />
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
