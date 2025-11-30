import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {FaRegHeart, FaHeart} from 'react-icons/fa';
import './character.css';

const Character = ({favorites, setFavorites}) => {
  const {characterId} = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [comicTitles, setComicTitles] = useState([]);

  const isInFavorites = () => {
    return favorites.some((fav) => fav._id === data._id);
  };

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://site--mar-backend--cn64gcfznbgf.code.run/character/${characterId}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCharacter();
  }, [characterId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const titles = await Promise.all(
          data.comics.map(async (comicId) => {
            const response = await axios.get(
              `http://localhost:3000/comic/${comicId}`
            );

            return response.data.title;
          })
        );
        setComicTitles(titles);
        setLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [data]);

  return loading ? (
    <div className="container-loading">
      <p className="loading-text">Awakening Heroes...</p>
    </div>
  ) : (
    <div className="container-character">
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

      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt="Image Hero Marvel"
      />
      <p className="character-name">{data.name}</p>
      <div className="character-movies">
        {comicTitles.map((title, index) => {
          return (
            <p className="character-movie" key={index}>
              - {title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
