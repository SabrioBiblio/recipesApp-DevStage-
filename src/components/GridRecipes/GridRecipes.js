import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CardRecipe from '../CardRecipe/CardRecipe';
import s from './GridRecipes.module.css';
import * as actions from '../../store/actions';
import Spinner from '../Spinner/Spinner';

const GridRecipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getRecipes('Pizza'));
  }, []);

  const [activeCard, setActiveCard] = useState(0);
  const [recipeMain, setRecipeMain] = useState(0);

  const recipes = useSelector((state) => state.recipesReducer.recipes.data);
  const status = useSelector((state) => state.recipesReducer.recipes.loading);

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

  const cardsSecondArr = [];

  const cardsFirstArr = recipes.map((recipe, i) => {
    if (i % 2) {
      cardsSecondArr.push(<CardRecipe
        key={i}
        data={recipe}
        index={i}
        click={setMain}
        setActive={setActiveCard}
        activeIndex={activeCard}/>);
    } else {
      return <CardRecipe
        key={i}
        data={recipe}
        index={i}
        click={setMain}
        setActive={setActiveCard}
        activeIndex={activeCard}/>;
    }
  });

  return (
    <>
      <div className={s.GridRecipes}>
        <div className={s.column}>
          {cardsFirstArr}
        </div>
        <div className={s.column}>
          {cardsSecondArr}
        </div>
      </div>
    </>
  );
};
export default GridRecipes;
