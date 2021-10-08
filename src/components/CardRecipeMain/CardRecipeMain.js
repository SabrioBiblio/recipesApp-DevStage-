import React from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import s from './CardRecipeMain.module.css'

const CardRecipeMain = ({ id }) => {

   const recipes = useSelector(state => state.recipes);

   if(!recipes.length){
      return (
        <div>Loading</div>
      )
   }

   const {title, image, readyInMinutes, servings, id:idRecipe, summary} = recipes[id];

   const summaryCut = summary.slice(0, 100) + '...';

   let servingCount = [];
   if(servings>4){
      servingCount = (
         <>
         <FontAwesomeIcon icon={faUser}/>
         <span>{servings}</span>
         </>
      );
   }else{
      for(let i = 0; i<servings; i++){
         servingCount.push(<FontAwesomeIcon key={i} icon={faUser}/>);
      }
   }

   return (
      <div className={s.cardRecipeWrapper}>
         <div className={s.cardRecipe}>
            <div className={s.cardRecipeImageWrapper}>
               <img className={s.cardRecipeImage} src={image} alt="" />
            </div>
            <div className={s.cardRecipeInfo}>
               <h1>{title}</h1>
               <div className={s.cardRecipeDescription} dangerouslySetInnerHTML={{ __html: summaryCut}}>
               </div>
               <div className={s.cardRecipeProp}>
                  <div className={s.cardRecipePropServing}>
                     <label>Serving</label>
                     <div className={s.cardRecipeServings}>
                        {servingCount ? servingCount : ''}
                     </div>
                  </div>
                  <div className={s.cardRecipePropTime}>
                     <label>Cook Time</label>
                     <p><FontAwesomeIcon icon={faClock}/>{readyInMinutes} m</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CardRecipeMain;