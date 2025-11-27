import React from 'react';

const Search = ({searchTerm, setSearchTerm, placeholder}) => {
  return (
    <div className="search">
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
