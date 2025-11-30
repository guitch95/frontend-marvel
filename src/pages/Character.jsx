import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {FaRegHeart} from 'react-icons/fa';

const Character = ({favorites, setFavorites}) => {
  const {characterId} = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--mar-backend--cn64gcfznbgf.code.run/comics/${characterId}`
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
      <FaRegHeart
        size={'32px'}
        onClick={() => {
          const isAlreadyFavorite = favorites.find(
            (fav) => fav._id === data._id
          );
          if (!isAlreadyFavorite) {
            const copy = [...favorites];
            copy.push(data);
            setFavorites(copy);
          }
        }}></FaRegHeart>

      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt="Image Hero Marvel"
      />
      <p className="character-name">{data.name}</p>
      <div className="character-movies">
        {data.comics.map((element) => {
          return (
            <p className="character-movie" key={element._id}>
              - {element.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
