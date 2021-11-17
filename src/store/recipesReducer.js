import {update} from '../common/utils';

const initialState = {
  recipes: {
    data: null,
    loading: false,
    error: null,
  },
  wishlist: {
    data: null,
  },
};

const getRecipes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return update(state, {recipes: {
        data: action.recipes.results,
      },
      });
    case 'SET_SEARCH_RECIPES':
      return update(state, {recipes: {
        data: action.recipes.results,
      },
      });
    case 'FETCH_RECIPES_START':
      return update(state, {recipes: {
        loading: true,
      },
      });
    case 'FETCH_RECIPES_SUCCESS':
      return update(state, {recipes: {
        loading: false,
        error: null,
      },
      });
    case 'FETCH_RECIPES_FAIL':
      return update(state, {recipes: {
        loading: false,
        error: action.error,
      },
      });
    case 'FETCH_RECIPES_SEARCH_SUCCESS':
      return update(state, {loading: false, error: null});

    case 'SET_WISHLIST_RECIPES':
      return update(state, {wishlist: {
        data: action.payload,
      },
      });
    default:
      return state;
  }
};

export default getRecipes;
