import React from 'react';

import Gridwishlist from '../../components/GridWishlist/GridWishlist';
import s from './Wishlist.module.css';

const Wishlist = () => {
  return (
    <div className={s.page}>
      <div className="container">
        <div className={s.wishlistPageWrapper}>
          <Gridwishlist/>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
