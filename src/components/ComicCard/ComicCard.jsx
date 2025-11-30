import React from 'react';
import {Link} from 'react-router-dom';
import './comicCard.css';

const ComicCard = ({element}) => {
  const picture = `${element.thumbnail.path}.${element.thumbnail.extension}`;

  return (
    <Link to={`/comic/${element._id}`} className="link-comic">
      <div className="card">
        <img src={picture} alt="Marvel Hero" />
        <h2>{element.title}</h2>
        <p>{element.description}</p>
      </div>
    </Link>
  );
};

export default ComicCard;
