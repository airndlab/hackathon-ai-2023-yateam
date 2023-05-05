export const SET_CATEGORIES_TYPE = 'SET_CATEGORIES';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES_TYPE,
  payload: categories
});

export const fetchCategories = (dispatch) => {
  fetch('/api/categories')
      .then((response) => response.json())
      .then((data) => dispatch(setCategories(data)))
      .catch((error) => console.log(error));
};