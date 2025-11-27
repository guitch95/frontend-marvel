import React from 'react';
import {FaRegHeart} from 'react-icons/fa';

const AddToFavs = ({favsArr, setFavsArr}) => {
  return (
    <FaRegHeart
      onClick={() => {
        const copy = [...favsArr];
        copy.push(0);
        setFavsArr(copy);
      }}
    />
  );
};

export default AddToFavs;
