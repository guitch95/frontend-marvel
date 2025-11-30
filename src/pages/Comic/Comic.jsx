import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {FaRegHeart, FaHeart} from 'react-icons/fa';
import './comic.css';

const Comic = ({favorites, setFavorites}) => {
  const {comicId} = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const isInFavorites = () => {
    return favorites.some((fav) => fav._id === data._id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--mar-backend--cn64gcfznbgf.code.run/comic/${comicId}`
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
    <div className="container-comics">
      {/* Gestion de l'icône des Favoris */}
      {isInFavorites() ? (
        <FaHeart
          size={'32px'}
          onClick={() => {
            const newFavorites = favorites.filter(
              (fav) => fav._id !== data._id
            );
            setFavorites(newFavorites);
          }}
        />
      ) : (
        <FaRegHeart
          size={'32px'}
          onClick={() => {
            const copy = [...favorites];
            copy.push(data);
            setFavorites(copy);
          }}
        />
      )}
      <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="" />
      <p className="comic-name">{data.title}</p>
      <p className="comic-description">{data.description}</p>
    </div>
  );
};

export default Comic;
