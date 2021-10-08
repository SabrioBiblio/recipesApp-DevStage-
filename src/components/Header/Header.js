import {React, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

export default function Header() {
  const [isSticky, setSticky] = useState(false);

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
        </div>
      </div>
    </header>
  );
}
