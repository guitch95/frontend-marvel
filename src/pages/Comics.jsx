import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ComicCard from '../components/ComicCard';
import Search from '../components/Search';

const Comics = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const limit = 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skip = (page - 1) * limit;
        const response = await axios.get(
          `https://site--mar-backend--cn64gcfznbgf.code.run/comics?skip=${skip}&limit=${limit}&name=${searchTerm}`
        );
        console.log(response.data);
        setData(response.data);
        setCount(response.data.count);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, searchTerm]);

  const totalPages = Math.ceil(count / limit);

  const pages = [];

  for (let i = 0; i <= totalPages; i++) {
    pages.push(i);
  }

  return loading ? (
    <div className="container-loading">
      <p className="loading-text">Awakening Comics...</p>
    </div>
  ) : (
    <div className="container">
      <Search
        placeholder="Rechercher votre comics favoris"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="container-comics">
        {data.results.map((element) => {
          return <ComicCard key={element._id} element={element} />;
        })}
      </div>
      <div className="container-btn">
        <button
          className="main-btn"
          hidden={page === 1}
          onClick={() => setPage((prev) => prev - 1)}>
          Précédent
        </button>
        {pages.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={page === num ? 'active' : ''}>
            {num}
          </button>
        ))}
        <button
          className="main-btn"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Comics;
