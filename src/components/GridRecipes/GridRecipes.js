import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CardRecipe from '../CardRecipe/CardRecipe';
import s from './GridRecipes.module.css';
import * as actions from '../../store/actions';
import Spinner from '../Spinner/Spinner';

const GridRecipes = () => {
  useEffect(() => {
    dispatch(actions.getRecipes('Pizza'));
  }, []);

  const [activeCard, setActiveCard] = useState(0);
  const [recipeMain, setRecipeMain] = useState(0);


  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipesReducer.recipes);

  const status = useSelector((state) => state.recipesReducer.loading);

  if (!recipes || status) {
    return (
      <div className={s.GridRecipes}>
        <Spinner/>
      </div>
    );
  }

  if (!recipeMain) {
    setRecipeMain(recipes[0]);
  }

  const setMain = (id) => {
    setRecipeMain(recipes[id]);
  };

  const card = recipes.map((recipe, i) => {
    return <CardRecipe
      key={i}
      data={recipe}
      index={i}
      click={setMain}
      setActive={setActiveCard}
      activeIndex={activeCard}/>;
  }
  );

  return (
    <>
      <div className={s.GridRecipes}>
        {card}
      </div>
    </>
  );
};
export default GridRecipes;
