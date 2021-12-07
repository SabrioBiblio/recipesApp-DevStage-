import React from 'react';
import s from './MainBanner.module.css';

import banner from '../../images/banner.jpg';
import blob from '../../images/blob.svg'
import lines from '../../images/lines.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export default function MainBanner() {
  return (
    <div className={s.heroScreen}>
      <img className={s.blob} src={blob} alt="" />
      <img className={s.blob1} src={blob} alt="" />
      <img className={s.lines} src={lines} alt="" />
      <div className={s.heroScreenLeft}>
        <h1 className={s.heroScreenTitle}>Chefs<br/><span className={s.wordGap}>Academy</span><br/>Secrets</h1>
        <span className={s.heroScreenSlogan}><FontAwesomeIcon icon={faHeart} className={s.heroScreenHeart}/>New strawberry season has<br/>started, lets cook!</span>
      </div>
      <div className={s.heroScreenRight}>
        <img className={s.imageBanner} src={banner} alt="" />
      </div>
    </div>
  )
}
