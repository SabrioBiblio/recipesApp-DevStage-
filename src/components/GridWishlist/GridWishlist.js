import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import useDatabase from '../../hooks/useDatabase';
import { useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import CardRecipe from '../CardRecipe/CardRecipe';
import Spinner from '../Spinner/Spinner';
import s from './GridWishlist.module.css'

const Gridwishlist = () => {
  const dispatch = useDispatch();

  const {getDocument} = useDatabase();
  const [activeCard, setActiveCard] = useState(0);
  const [recipeMain, setRecipeMain] = useState(0);

  let wishlist = null;

  useEffect(() => {
    (async () => {
      const ids = await getDocument('users');
      if(ids) dispatch(actions.getRecipesByIds(ids.recipesIds));
    })();
  }, []);

  wishlist = useSelector((state) => state.recipesReducer.wishlist.data)

  if (wishlist === null) {
    return (
      <div>
        <Spinner/>
      </div>
    );
  }
  if(wishlist.length === 0){
    return (
      <h1>Your wishlist is empty.</h1>
    )
  }

  if (!recipeMain) {
    setRecipeMain(wishlist[0]);
  }

  const setMain = (id) => {
    setRecipeMain(wishlist[id]);
  };

  let cardsSecondArr = [];
  const cardsFirstArr = wishlist.map((recipe, i) => {
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
    <div className={s.GridWishlist}>
    <div className={s.column}>
      {cardsFirstArr}
    </div>
    <div className={s.column}>
      {cardsSecondArr}
    </div>
  </div>
  );
}

export default Gridwishlist;
