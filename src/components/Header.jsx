import React from 'react';
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom';
import {FaHeart} from 'react-icons/fa6';

const Header = () => {
  return (
    <header>
      <div className="container-header">
        <Link to="/" className="link-logo">
          <img src={logo} alt="Marvel Logo" />
        </Link>

        <div className="navigation-menu">
          <Link className="menu-item" to="/characters">
            Personnages
          </Link>
          <Link className="menu-item" to="/comics">
            Comics
          </Link>
        </div>
        <Link to={'/favorites'} className="favs">
          <FaHeart color="white" size={'40px'} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
