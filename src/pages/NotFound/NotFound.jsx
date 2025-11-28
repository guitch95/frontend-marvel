import React from 'react';
import {Link} from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  return (
    <div className="container-notfound">
      <p>Rien a voir ici !</p>
      <Link style={{textDecoration: 'none'}} to={'/'}>
        <button>Revenir en lieu sur</button>
      </Link>
    </div>
  );
};

export default NotFound;
