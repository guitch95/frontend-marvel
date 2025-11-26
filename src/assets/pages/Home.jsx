import React from 'react';
import hero from '../../assets/img/hero.png';

const Home = () => {
  return (
    <div className="hero-img">
      <img src={hero} alt="" />
      <h1>Bienvenue sur Marvel</h1>
    </div>
  );
};

export default Home;
