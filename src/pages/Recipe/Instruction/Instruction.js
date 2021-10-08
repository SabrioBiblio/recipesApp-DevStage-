import React from 'react';

import s from './Instruction.module.css';
import Ingredient from '../Ingredient/Ingredient';

export default function Instruction(props) {
  const {instructions} = props;

  const instructionsArray = instructions.steps.map((instruction, index) => {
    const ingredients = instruction.ingredients.map((ingredient) => {
      return <Ingredient image={ingredient.image}/>;
    });
    return (
      <div className={s.instruction}>
        <div>
          <b>Step: {index + 1}</b>
        </div>
        <p>{instruction.step}</p>
        <div className={s.ingredientsWrapper}>
          {ingredients}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className={s.instructionTitle}>Instruction:</h2>
      {instructionsArray}
    </div>
  );
}
