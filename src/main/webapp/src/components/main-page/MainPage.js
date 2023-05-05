import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PracticeTable from './PracticeTable';
import CategoryFilter from './CategoryFilter';
import { UserContext } from '../../contexts/UserContext';
import { isEmpty, isNil } from 'lodash';
import SearchBar from './SearchBar';

const MainPage = () => {
  const { user } = useContext(UserContext);
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
      <div>
        <nav>
          <ul>
            {user ? (
                <li>
                  <Link to="/profile">{user.name}</Link>
                </li>
            ) : (
                <li>
                  <Link to="/login">Вход</Link>
                </li>
            )}
          </ul>
        </nav>
        <h1>Лучшие практики использования нейросетей в разработке ПО</h1>
        <div>
          <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategoryId}
              setSelectedCategory={setSelectedCategoryId}
          />
          <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
          />
        </div>
        <PracticeTable practices={filteredPractices} categories={categories} />
      </div>
  );
};

export default MainPage;
