import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';

import s from './RecipePage.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faUser, faHeart} from '@fortawesome/free-solid-svg-icons';
import Ingredient from './Ingredient/Ingredient';
import Instruction from './Instruction/Instruction';
import Spinner from '../../components/Spinner/Spinner';
import SimilarRecipe from './SimilarRecipe/SimilarRecipe';

import similar from '../../similar.json';

const RecipePage = () => {
  const {id} = useParams();

  const [recipe, setRecipe] = useState(null);
  const [similarRecipesObjects, setSimilarRecipes] = useState(similar);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=3496c5a5b6b94a23af49f2e08cd17ec7&ids=${id}`)
        .then((res) => res.json())
        .then((res) => setRecipe(res[0]));
  }, [id]);


  useEffect(() => {
    if (similarRecipesObjects) {
      setSimilarRecipes(similarRecipesObjects.map((recipe, i) => {
        return <SimilarRecipe
          title={recipe.title}
          key={i}
          servings={recipe.servings}
          readyInMinutes={recipe.readyInMinutes}
        />;
      }));
    }
  }, []);

  if (recipe === null) {
    return (
      <>
        <Spinner/>
      </>
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
  } = recipe;

  const ingredients = extendedIngredients.map((ingredients, index) => {
    return <Ingredient image={ingredients.image} key={index}/>;
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
        {similarRecipesObjects}
      </div>
    </div>
  );
};

export default RecipePage;
