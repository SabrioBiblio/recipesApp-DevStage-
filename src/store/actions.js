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
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ea3fc04050e84243beb4a0a62b8b79af&query=${query}&addRecipeInformation=true&number=2`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(fetchSuccess());
          dispatch(setSearchRecipes(res));
        })
        .catch((error) => dispatch(fetchFail(error)));
  };
};