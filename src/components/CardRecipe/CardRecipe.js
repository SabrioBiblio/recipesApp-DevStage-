import {Link} from 'react-router-dom';
import React from 'react';

import s from './CardRecipe.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faUser, faHeart} from '@fortawesome/free-solid-svg-icons';
import CardRecipeMain from '../CardRecipeMain/CardRecipeMain';
import {getRow} from '../../common/utils';
import useWishlist from '../../hooks/useWishlist';

const CardRecipe = (props) => {
  const {
    title, image,
    readyInMinutes,
    servings, summary,
    id: idRecipe,
  } = props.data;

  const {click, setActive} = props;

  const summaryCut = summary.slice(0, 170) + '...';

  const {hasItem, toggleWishlistData} = useWishlist(idRecipe);

  const clickTerm = (id) => {
    click(id);
    setActive(props.index);

    const gridRowStart = getRow(id+1)();
    document.documentElement.style.setProperty('--row-start', gridRowStart);
    document.documentElement.style.setProperty('--row-end', gridRowStart+2);

    const gridColumns = (id+1)%2 ? 1 : 2;
    document.documentElement.style.setProperty('--column-start', gridColumns);
  };


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
  <CardRecipeMain data={props.data}/>;

  return (
    <div onClick={() => clickTerm(props.index)}
      className={`${s.cardRecipeWrapper}
      ${props.index === props.activeIndex ? s.activeCard : ''}`}>

      <div className={s.cardRecipe}>
        <div className={s.cardRecipeImageWrapper}>
          <img className={s.cardRecipeImage} src={image} alt="" />
        </div>
        <div className={s.cardRecipeInfo}>
          <h1>{title}</h1>
          <div className={s.cardRecipeDescription}>
            <p dangerouslySetInnerHTML={{__html: summaryCut}}></p>
            <Link className={s.cardRecipeLink} to={{
              pathname: `/recipe/${idRecipe}`,
            }}>Full recipe</Link>
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
              <p><FontAwesomeIcon icon={faClock}/>{readyInMinutes}m</p>
            </div>
          </div>
          <div
            className={`${s.toggleWishlist} ${hasItem ? s.active : ''}`}
            onClick={
              (e) => {
                e.stopPropagation();
                toggleWishlistData(idRecipe);
              }
            }><FontAwesomeIcon icon={faHeart}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
