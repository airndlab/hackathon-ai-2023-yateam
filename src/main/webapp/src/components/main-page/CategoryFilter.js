import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">Все</option>
          {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
  );
};

export default CategoryFilter;
