import {useState} from 'react';
import useDatabase from './useDatabase';

const useWishlist = (recipeId) => {

  const {getDocument, setDocument} = useDatabase();
  const [hasItem, setHasItem] = useState(isInWishlist()); 

  const toggleWishlistData = async (id) => {
    const whishlistData = await getDocument('users');
    if(!whishlistData){
      await setDocument('users', {
        recipesIds: [id],
      })
      localStorage.setItem('wishlist', JSON.stringify([id]))
      setHasItem(isInWishlist())
    }else{
      const {recipesIds} = whishlistData;
      const filteredRecipes = recipesIds.filter((index) => index === id)
      if(filteredRecipes.length > 0) {
        const removedRecipes = recipesIds.filter((index) => index !== id)
        await setDocument('users', {
          recipesIds: [...removedRecipes],
        })
        localStorage.setItem('wishlist', JSON.stringify(removedRecipes))
        setHasItem(isInWishlist())
      } else {
        await setDocument('users', {
          recipesIds: [...recipesIds, id],
        })
        localStorage.setItem('wishlist', JSON.stringify([...recipesIds, id]))
        setHasItem(isInWishlist())
      }
    }
  };

  function isInWishlist() {
    const localUsers = JSON.parse(localStorage.getItem('wishlist'));
    if(Array.isArray(localUsers)){
      return localUsers.filter((id) => id === recipeId).length > 0;  
    }
    
  }

  return {
    toggleWishlistData,
    hasItem
  };
};

export default useWishlist;
