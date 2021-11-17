import {getDoc, getFirestore, doc, setDoc} from '@firebase/firestore';
import {getAuth} from '@firebase/auth';

const useDatabase = () => {
  const db = getFirestore();

  let userId = null;

  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    userId = user.uid
  })

  const getDocument = async (documentName) => {
    if(userId){
      const result = await getDoc(doc(db, documentName, userId));
      return result.data();
    }
  }

  const setDocument = async (documentName, data) => {
    if(userId){
      const result = await setDoc(doc(db, documentName, userId), { ...data })
      return result;
    }
  }

  return {
    getDocument,
    setDocument
  };
};

export default useDatabase;

