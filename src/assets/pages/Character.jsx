import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Character = () => {
  const {characterId} = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${characterId}`
        );
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return loading ? (
    <div className="container-loading">
      <p className="loading-text">Awakening Heroes...</p>
    </div>
  ) : (
    <div className="container-character">
      <img
        src={`${data.message.thumbnail.path}.${data.message.thumbnail.extension}`}
        alt="Image Hero Marvel"
      />
      <p className="character-name">{data.message.name}</p>
      {data.message.comics.map((element) => {
        return (
          <ul>
            <li className="character-movie" key={element._id}>
              {element.title}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Character;
