import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Comic = () => {
  const {comicId} = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comic/${comicId}`
        );
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [comicId]);

  return loading ? (
    <div className="container-loading">
      <p className="loading-text">Awakening Heroes...</p>
    </div>
  ) : (
    <div className="container-comic">
      <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="" />
      <p className="comic-name">{data.title}</p>
      <p className="comic-description">{data.description}</p>
    </div>
  );
};

export default Comic;
