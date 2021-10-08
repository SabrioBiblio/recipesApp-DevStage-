import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';

import s from './RecipePage.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faUser, faHeart} from '@fortawesome/free-solid-svg-icons';
import Ingredient from './Ingredient/Ingredient';
import Instruction from './Instruction/Instruction';
import Spinner from '../../components/Spinner/Spinner';

const RecipePage = () => {
  const {id} = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=ea3fc04050e84243beb4a0a62b8b79af&ids=${id}`)
        .then((res) => res.json())
        .then((res) => setRecipe(res));
  }, [id]);

  if (recipe === null) {
    return (
      <Spinner/>
    );
  }
  const {
    title,
    image,
    readyInMinutes,
    servings,
    summary,
    extendedIngredients,
    analyzedInstructions,
  } = recipe[0];


  const ingredients = extendedIngredients.map((ingredients) => {
    return <Ingredient image={ingredients.image}/>;
  });

  return (
    <div className={s.page}>
      <div className="container">
        <div className={s.recipePageWrapper}>
          <div className={s.recipePageCard}>
            <div className={s.recipePageCardMainImage}>
              <img src={image} alt="" />
            </div>
            <div className={s.recipePageCardDescriptions}>
              <div className={s.recipePageCardDescription}>
                <FontAwesomeIcon icon={faClock}/>
                <p>{readyInMinutes}m</p>
              </div>
              <div className={s.recipePageCardDescription}>
                <FontAwesomeIcon icon={faUser}/>
                <p>{servings}</p>
              </div>
              <div className={s.recipePageCardDescription + ' desc-heart'}>
                <FontAwesomeIcon icon={faHeart}/>
                <p>{readyInMinutes}</p>
              </div>
            </div>
            <p><b>Ingredients:</b></p>
            <div className={s.recipePageCardIngredients}>
              {ingredients}
            </div>
          </div>
          <div className={s.recipePageDescription}>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{__html: summary}}></p>
            <div className={s.recipePageInstruction}>
              <Instruction instructions={analyzedInstructions[0]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
