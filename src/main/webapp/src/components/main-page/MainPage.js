import React, { useEffect, useState } from 'react';
import PracticeTable from './PracticeTable';
import CategoryFilter from './CategoryFilter';
import { isEmpty, isNil } from 'lodash';
import SearchBar from './SearchBar';
import {
    Container,
    FilterContainer,
    TypingContainer, TypingText
} from "./styles/MainPageStyles";

const MainPage = () => {
  const [practices, setPractices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/practices')
        .then((response) => response.json())
        .then((data) => setPractices(data))
        .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch('/api/categories')
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((error) => console.log(error));
  }, []);

  const filteredPractices = practices.filter(
      (practice) => (isNil(selectedCategoryId) || selectedCategoryId === 'all' || practice?.categoryId ==
              selectedCategoryId) &&
          (isEmpty(searchTerm) || practice?.name?.toLowerCase?.()?.includes(searchTerm?.toLowerCase())),
  );

  return (
      <Container>
        <TypingContainer>
            <TypingText>
                Лучшие практики использования нейросетей в разработке ПО
            </TypingText>
        </TypingContainer>
        <FilterContainer>
          <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategoryId}
              setSelectedCategory={setSelectedCategoryId}
          />
          <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
          />
        </FilterContainer>
        <PracticeTable practices={filteredPractices} categories={categories} />
      </Container>
  );
};

export default MainPage;
