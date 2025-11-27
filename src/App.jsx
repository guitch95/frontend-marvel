import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './assets/pages/Home';
import Characters from './assets/pages/Characters';
import Comics from './assets/pages/Comics';
import Favorites from './assets/pages/Favorites';
import Character from './assets/pages/Character';
import Comic from './assets/pages/Comic';
import NotFound from './assets/pages/NotFound';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          {/* <Route path="/character/:characterId" element={<Character />} /> */}
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:characterId" element={<Character />} />
          <Route path="/comic/:comicId" element={<Comic />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
