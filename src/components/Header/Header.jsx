import React from 'react';
import logo from '../../assets/img/logo.png';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container-header">
        <Link to="/" className="link-logo">
          <img src={logo} alt="Marvel Logo" />
        </Link>

        <div className="navigation-menu">
          <Link className="menu-item" to="/characters">
            <p>Personnages</p>
          </Link>
          <Link className="menu-item" to="/comics">
            <p>Comics</p>
          </Link>
          <Link className="menu-item" to="/favorites">
            <p>Favoris</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
