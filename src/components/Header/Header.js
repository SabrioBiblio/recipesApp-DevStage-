import {React, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import './Header.css';

export default function Header() {
  const [isSticky, setSticky] = useState(false);

  const {user} = useAuth();

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
    return () => {
      window.removeEventListener('scroll', () => stickyHeader);
    };
  });

  const stickyHeader = () => {
    setSticky(ref.current.getBoundingClientRect().top + window.scrollY >= 100);
  };

  const ref = useRef(null);

  return (
    <header ref={ref} className={isSticky ? 'sticky-header' : ''}>
      <div className="header-container ">
        <div className="header-wrappper">
          <div className="header-logo header-cell-left">
            <span>RECIPES</span>
          </div>
          <div className="primary-menu header-cell-center">
            <ul className="header-menu">
              <li><Link to="/">Home</Link></li>
              <li><a href="/">Cars</a></li>
              <li><a href="/">Brands</a></li>
              <li><a href="/">Price</a></li>
            </ul>
          </div>

          <div className="primary-menu header-cell-right">
            {user ?
              <>
                <Link to={{
                  pathname: `/wishlist`}}
                >
                  <FontAwesomeIcon icon={faHeart} className="wishlist"/>
                </Link>
                <Logout/>
              </> :
              <>
                <Login/>
              </>
            }
          </div>

        </div>
      </div>
    </header>
  );
}
