import json from '../recipes.json';

const setRecipes = (recipes) => {
  return {
    type: 'SET_RECIPES',
    recipes,
  };
};
const fetchStart = () => {
  return {
    type: 'FETCH_RECIPES_START',
  };
};
const fetchFail = (error) => {
  return {
    type: 'FETCH_RECIPES_FAIL',
    error,
  };
};
const fetchSuccess = () => {
  return {
    type: 'FETCH_RECIPES_SUCCESS',
  };
};
const setSearchRecipes = (recipes) => {
  return {
    type: 'SET_SEARCH_RECIPES',
    recipes,
  };
};
export const setRecipe = (recipe) => {
  return {
    type: 'SET_RECIPE',
    recipe,
  };
};
export const getRecipes = (query) => {
  return (dispatch) => {
    dispatch(setRecipes(json));
    // dispatch(fetchStart());
    // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3496c5a5b6b94a23af49f2e08cd17ec7&query=${query}&addRecipeInformation=true&number=2`)
    //    .then(res => res.json())
    //    .then(res => {
    //       dispatch(fetchSuccess());
    //       dispatch(setRecipes(res));
    //    })
    //    .catch(error => dispatch(fetchFail(error)));
  };
};
export const getSearchRecipes = (query) => {
  return (dispatch) => {
    dispatch(fetchStart());
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3496c5a5b6b94a23af49f2e08cd17ec7&query=${query}&addRecipeInformation=true&number=2`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(fetchSuccess());
          dispatch(setSearchRecipes(res));
        })
        .catch((error) => dispatch(fetchFail(error)));
  };
};

const setIdsRecipes = (payload) => {
  return {
    type: 'SET_WISHLIST_RECIPES',
    payload,
  };
};
export const getRecipesByIds = (ids) => {
  return (dispatch) => {
    if (ids.length === 0) {
      dispatch(setIdsRecipes([]));
      return;
    };
    fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=3496c5a5b6b94a23af49f2e08cd17ec7&ids=${ids.join(',')}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(setIdsRecipes(res));
        });
  };
};
