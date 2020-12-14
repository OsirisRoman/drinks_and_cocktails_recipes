import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  //Recipes State
  const [recipes, setRecipes] = useState([]);
  //Searching State
  const [searching, setSearching] = useState({
    name: '',
    category: '',
  });

  const [consult, setConsult] = useState(false);

  useEffect(() => {
    if (searching.name === '' || searching.category === '') return;

    const getRecipes = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searching.name}&c=${searching.category}`;
      const resultado = await axios.get(url);
      const recipesList = resultado.data.drinks.map((recipe) => {
        return recipe.strDrink;
      });
      setRecipes(recipesList);
    };
    if (consult) {
      getRecipes();
      setConsult(false);
    }
  }, [searching, consult]);

  return (
    <RecetasContext.Provider
      value={{
        recipes,
        setSearching,
        setConsult,
      }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
