import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ComicCard from '../../components/ComicCard/ComicCard';
import Search from '../../components/Search/Search';
import './comics.css';

const Comics = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [inputPage, setInputPage] = useState('');

  const limit = 100;

  useEffect(() => {
    // Récupération des données provenant de comics (liste entière)
    const fetchData = async () => {
      try {
        const skip = (page - 1) * limit;
        const response = await axios.get(
          `http://localhost:3000/comics?skip=${skip}&limit=${limit}&name=${searchTerm}`
        );
        // console.log(response.data);
        setData(response.data);
        setCount(response.data.count);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, searchTerm]);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(count / limit);

  // Fonction pour gérer la pagination

  const goToPage = (pageNumber) => {
    const pageNum = parseInt(pageNumber);
    if (pageNum >= 1 && pageNum <= totalPages) {
      setPage(pageNum);
      setInputPage('');
    }
  };

  return loading ? (
    <div className="container-loading">
      <p className="loading-text">Awakening Comics...</p>
    </div>
  ) : (
    <div className="container">
      <Search
        placeholder="Rechercher votre comic favoris"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="container-card">
        {data.results.map((element) => {
          return <ComicCard key={element._id} element={element} />;
        })}
      </div>
      <div className="container-btn">
        <button onClick={() => goToPage(1)} disabled={page === 1}>
          Premier
        </button>
        <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
          Précedent
        </button>
        <div>
          <div className="container-input" style={{color: 'white'}}>
            <span>
              Page {page} sur {totalPages}
            </span>

            <input
              type="number"
              min="1"
              max={totalPages}
              value={inputPage}
              onChange={(e) => setInputPage(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  goToPage(inputPage);
                }
              }}
              placeholder="Aller à la page"
              style={{width: '150px', margin: '0 10px'}}
            />
            <button onClick={() => goToPage(inputPage)}>Go</button>
          </div>
        </div>
        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}>
          Suivant
        </button>

        <button
          onClick={() => goToPage(totalPages)}
          disabled={page === totalPages}>
          Dernier
        </button>
      </div>
    </div>
  );
};

export default Comics;
