import React from 'react';
import s from './MainBanner.module.css';

import banner from '../../images/banner.jpg';

export default function MainBanner() {
  return (
    <div className="main-banner-wrapper">
      <div className={s.mainBannerWrapper}>
        <img className={s.imageBanner} src={banner} alt="" />
      </div>
    </div>
  );
}
