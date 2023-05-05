export const SET_CATEGORIES_TYPE = 'SET_CATEGORIES';
export const SET_USER_TYPE = 'SET_USER';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES_TYPE,
  payload: categories
});

export const setUser = (user) => ({
  type: SET_USER_TYPE,
  payload: user
});

export const fetchCategories = (dispatch) => {
  fetch('/api/categories')
      .then((response) => response.json())
      .then((data) => dispatch(setCategories(data)))
      .catch((error) => console.log(error));
};

export const fetchUser = (dispatch) => {
  fetch('/api/users/me')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.text());
        }
      })
      .then((data) => dispatch(setUser(data)))
      .catch((error) => setUser(null));
};