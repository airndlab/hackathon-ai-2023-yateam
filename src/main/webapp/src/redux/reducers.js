import { SET_CATEGORIES_TYPE } from './actions';

const initialState = {
  categories: []
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CATEGORIES_TYPE:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
