import { SET_CATEGORIES_TYPE, SET_USER_TYPE } from './actions';

const initialState = {
  categories: [],
  user: null
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CATEGORIES_TYPE:
      return { ...state, categories: action.payload }
    case SET_USER_TYPE:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
