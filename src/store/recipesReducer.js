import {update} from '../common/utils';

const initialState = {
  recipes: null,
  error: null,
  loading: false,
};

const getRecipes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return update(state, {recipes: action.recipes.results});
    case 'SET_SEARCH_RECIPES':
      return update(state, {recipes: action.recipes.results});
    case 'FETCH_RECIPES_START':
      return update(state, {loading: true});
    case 'FETCH_RECIPES_SUCCESS':
      return update(state, {loading: false, error: null});
    case 'FETCH_RECIPES_SEARCH_SUCCESS':
      return update(state, {loading: false, error: null});
    case 'FETCH_RECIPES_FAIL':
      return update(state, {error: action.error, loading: false});
    default:
      return state;
  }
};

export default getRecipes;
