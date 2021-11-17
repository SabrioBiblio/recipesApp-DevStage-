import React from 'react';
import { signOut, getAuth} from 'firebase/auth';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import s from './Logout.module.css'

const Auth = () => {
  const auth = getAuth();
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <FontAwesomeIcon icon={faSignOutAlt} onClick={logout} className={s.logout}/>
    </>
  );
};

export default Auth;
