export const update = (oldObject, updatedProperties) => { 
   return { ...oldObject, ...updatedProperties } 
}

export function getRow(num, columns = 2) { 
   let row = 1; 
   let acc = 0;
    
   return function recursive() { 
     acc += columns; 
     if(acc >= num) { 
       return row; 
     } 
     row++; 
     return recursive(); 
   } 
};