import React, {useState} from 'react';

import {useDispatch} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPizzaSlice,
  faIceCream,
  faBreadSlice,
  faDrumstickBite,
  faCocktail,
} from '@fortawesome/free-solid-svg-icons';
import s from './RecipeCategory.module.css';
import {getRecipes} from '../../store/actions';

const RecipeCategory = () => {
  const [currentId, changeCurrentCategory] = useState(0);

  const dispatch = useDispatch();

  const getCategoryName = (categoryName, currentId) => {
    changeCurrentCategory(currentId);
    dispatch(getRecipes(categoryName));
  };

  const addActiveClass = (id) => {
    return id === currentId ? s.Active : 'unactive';
  };

  return (
    <>
      <ul className={s.recipesCategoryList}>
        <li className={addActiveClass(0)} onClick={() => {
          getCategoryName('pizza', 0);
        }}><FontAwesomeIcon icon={faPizzaSlice}/>Pasta</li>
        <li className={addActiveClass(1)} onClick={() => getCategoryName('dessert', 1)}><FontAwesomeIcon icon={faIceCream}/>Desert</li>
        <li className={addActiveClass(2)} onClick={() => getCategoryName('noodle', 2)}><FontAwesomeIcon icon={faBreadSlice}/>Noodle</li>
        <li className={addActiveClass(3)} onClick={() => getCategoryName('chicken', 3)}><FontAwesomeIcon icon={faDrumstickBite}/>Chicken</li>
        <li className={addActiveClass(4)} onClick={() => getCategoryName('cocktail', 4)}><FontAwesomeIcon icon={faCocktail}/>Cocktails</li>
      </ul>
    </>
  );
};

export default RecipeCategory;
