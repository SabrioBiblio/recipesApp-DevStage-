import React from 'react';
import {useDispatch} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {getSearchRecipes} from '../../store/actions';
import s from './Search.module.css';

export default function Search() {
  const dispatch = useDispatch();

  let inputTime = null;

  const getRecipes = (e) => {
    clearTimeout(inputTime);
    inputTime = setTimeout(() => {
      dispatch(getSearchRecipes(e.target.value));
    },
    500);
  };

  return (
    <div className={s.searchWrapper}>
      <FontAwesomeIcon className={s.searchIcon} icon={faSearch}/>
      <input
        className={s.searchInput}
        type="text" placeholder="Search recipes and more..."
        onChange={getRecipes}/>
    </div>
  );
}
