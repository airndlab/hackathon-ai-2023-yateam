import React, { useEffect, useState } from 'react';
import PracticeTable from './PracticeTable';
import CategoryFilter from './CategoryFilter';
import { isEmpty, isNil, toNumber } from 'lodash';
import SearchBar from './SearchBar';
import {
  Container,
  FilterContainer,
  TextLine,
  TypingContainer,
  TypingTextLargeDesktop,
  TypingTextMediumDevice,
  TypingTextSmallDevice,
} from './styles/MainPageStyles';
import { useSelector } from 'react-redux';
import Header from '../common/Header';

const MainPage = () => {
  const [practices, setPractices] = useState([]);
  const categories = useSelector((redux) => redux?.categories);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/practices')
        .then((response) => response.json())
        .then((data) => setPractices(data))
        .catch((error) => console.log(error));
  }, []);

  const filteredPractices = practices.filter(
      (practice) => (isNil(selectedCategoryId) || selectedCategoryId === 'all' || practice?.categoryId ===
              toNumber(selectedCategoryId)) &&
          (isEmpty(searchTerm) || practice?.name?.toLowerCase?.()?.includes(searchTerm?.toLowerCase())),
  );

  return (
      <>
        <Header />
        <Container>
          <TypingContainer>
            <TypingTextLargeDesktop>
              Лучшие практики использования нейросетей в разработке ПО
            </TypingTextLargeDesktop>
            <TypingTextMediumDevice>
              <TextLine>Лучшие практики использования</TextLine>
              <TextLine>нейросетей в разработке ПО</TextLine>
            </TypingTextMediumDevice>
            <TypingTextSmallDevice>
              <TextLine>Лучшие практики</TextLine>
              <TextLine>использования</TextLine>
              <TextLine>нейросетей в</TextLine>
              <TextLine>разработке ПО</TextLine>
            </TypingTextSmallDevice>
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
      </>
  );
};

export default MainPage;
