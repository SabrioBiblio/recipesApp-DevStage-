import React from 'react';

import s from './Ingredient.module.css';

export default function Ingredient({image}) {
  if (!image) {
    return (
      <>
      </>
    );
  }
  return (
    <div className={s.ingredientWrapper}>
      <img src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`} alt="ingredient"/>
    </div>
  );
}
