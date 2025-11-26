import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from '../../components/CharacterCard';

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/characters`);
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <div className="container-loading">
      <p className="loading-text">Awakening Heroes...</p>
    </div>
  ) : (
    <div className="container">
      {data.message.results.map((element) => {
        return <CharacterCard key={element._id} element={element} />;
      })}
    </div>
  );
};

export default Characters;
