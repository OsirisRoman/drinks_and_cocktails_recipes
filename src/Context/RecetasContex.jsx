import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  //Recipes State
  /* const [recipes, setRecipes] = useState([]); */
  const [drinksList, setDrinksList] = useState([]);
  //Searching State
  const [searching, setSearching] = useState({
    name: '',
    category: '',
  });

  const [consult, setConsult] = useState(false);

  useEffect(() => {
    if (searching.name === '' || searching.category === '') return;

    const getDrinksList = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searching.name}&c=${searching.category}`;
      const response = await axios.get(url);
      setDrinksList(response.data.drinks);
    };
    if (consult) {
      getDrinksList();
      setConsult(false);
    }
  }, [searching, consult]);

  return (
    <RecetasContext.Provider
      value={{
        drinksList,
        setSearching,
        setConsult,
      }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
