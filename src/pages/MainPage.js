import React from 'react';

import MainBanner from '../components/MainBanner/MainBanner';
import RecipesBlock from '../components/RecipesBlock/RecipesBlock';
import Auth from '../components/Login/Login';

export default function MainPage() {
  return (
    <>
      <MainBanner/>
      <RecipesBlock/>
    </>
  );
}
