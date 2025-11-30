import React from 'react';
import {Link} from 'react-router-dom';
import './characterCard.css';

const CharacterCard = ({element}) => {
  const picture = `${element.thumbnail.path}.${element.thumbnail.extension}`;
  // console.log(picture);
  return (
    <Link to={`/character/${element._id}`} className="link-character">
      <div className="card">
        <img src={picture} alt="Marvel Hero" />
        <h2>{element.name}</h2>
        <p>{element.description}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
