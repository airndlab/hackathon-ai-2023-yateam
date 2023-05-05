import React from 'react';
import {CategorySelect, FilterContainer} from "./styles/CategoryFilterStyles";

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
      <FilterContainer>
        <CategorySelect value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">Все</option>
          {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </CategorySelect>
      </FilterContainer>
  );
};

export default CategoryFilter;
