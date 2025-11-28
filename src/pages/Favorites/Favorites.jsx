import React from 'react';
import ComicCard from '../../components/ComicCard';
import CharacterCard from '../../components/CharacterCard';
import './favorites.css';

const Favorites = ({favorites}) => {
  return (
    <div className="container-favorites">
      {favorites.map((element) => {
        return element.title ? (
          <ComicCard key={element._id} element={element} />
        ) : (
          <CharacterCard key={element._id} element={element} />
        );
      })}
    </div>
  );
};
export default Favorites;
