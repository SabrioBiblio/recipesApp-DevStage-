import React from 'react';
import s from './MainBanner.module.css';

import banner from '../../images/banner.jpg';
import blob from '../../images/blob.svg'

export default function MainBanner() {
  return (
    <div className={s.heroScreen}>
      <img className={s.blob} src={blob} alt="" />
      <img className={s.blob1} src={blob} alt="" />
      <div className={s.heroScreenLeft}>
        <h1 className={s.heroScreenTitle}>Chefs<br/><span className={s.wordGap}>Academy</span><br/>Secrets</h1>
      </div>
      <div className={s.heroScreenRight}>
        <img className={s.imageBanner} src={banner} alt="" />
      </div>
    </div>
  )
}
