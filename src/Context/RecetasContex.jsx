import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  //Recipes State
  const [recipes, setRecipes] = useState([]);
  //Searching State
  const [searching, setSearching] = useState({
    name: '',
    category: '',
  });

  return (
    <RecetasContext.Provider
      value={{
        setSearching,
      }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
