import React from 'react';
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import s from './Login.module.css'

const Auth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faSignInAlt} onClick={login} className={s.login}/>
    </div>
  );
};

export default Auth;
