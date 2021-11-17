import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faUser} from '@fortawesome/free-solid-svg-icons';
import s from './SimilarRecipe.module.css';

const SimilarRecipe = (props) => {
  const {title, servings, readyInMinutes} = props;

  let servingCount = [];
  if (servings>4) {
    servingCount = (
      <>
        <FontAwesomeIcon icon={faUser}/>
        <span>{servings}</span>
      </>
    );
  } else {
    for (let i = 0; i < servings; i++) {
      servingCount.push(<FontAwesomeIcon key={i} icon={faUser}/>);
    }
  }

  return (
    <div>
      {title}
      <div className={s.cardRecipeProp}>
        <div className={s.cardRecipePropServing}>
          <label>Serving</label>
          <div className={s.cardRecipeServings}>
            {servingCount ? servingCount : ''}
          </div>
        </div>
        <div className={s.cardRecipePropTime}>
          <label>Cook Time</label>
          <p><FontAwesomeIcon icon={faClock}/>{readyInMinutes}m</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarRecipe;
