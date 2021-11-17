import {useState} from 'react';

import {getAuth} from '@firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  auth.onAuthStateChanged((currentUser) => {
    if (currentUser) {
      setUser(currentUser.uid);
    } else {
      setUser(null);
    }
  });
  return {
    user,
  };
};

export default useAuth;
