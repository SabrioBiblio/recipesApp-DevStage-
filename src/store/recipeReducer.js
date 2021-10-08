import {update} from '../common/utils';

const initialState = {
  recipe: null,
};

const getRecipe = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPE':
      return update(state, {recipe: action.recipe[0]});
    default:
      return state;
  }
};

export default getRecipe;
