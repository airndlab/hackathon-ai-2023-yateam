import React from 'react';
import {SearchBarContainer, SearchInput} from "./styles/SearchBarStyles";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
}) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
      <SearchBarContainer className="search-bar">
        <SearchInput
            type="text"
            placeholder="Поиск практик"
            value={searchTerm}
            onChange={handleInputChange}
        />
      </SearchBarContainer>
  );
};

export default SearchBar;
