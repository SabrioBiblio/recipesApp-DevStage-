import React from 'react';

import GridRecipes from '../GridRecipes/GridRecipes';
import s from './RecipesBlock.module.css';
import RecipeCategory from '../RecipeCategory/RecipeCategory';
import Search from '../Search/Search';

const RecipesBlock = () => {
  return (
    <>
      <div className={s.recipesBlockRow}>
        <div className={s.recipesBlockWrapper + ' container'}>
          <div className={s.recipesCategoryWrapper}>
            <h1>Recipes</h1>
            <div className="recipes-category">
              <RecipeCategory/>
            </div>
          </div>
          <div className={s.recipesCardWrapper}>
            <Search/>
            <GridRecipes/>
          </div>
        </div>
      </div>

    </>
  );
};
export default RecipesBlock;
