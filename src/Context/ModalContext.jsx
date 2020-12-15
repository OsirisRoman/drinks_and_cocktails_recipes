import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

//Crear el Context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //Provider State to store the drinkId
  const [selectedDrinkId, setSelectedDrinkId] = useState(null);
  //State that stores the recipe
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedDrinkId}`;
      const response = await axios.get(url);
      setRecipe(response.data.drinks[0]);
    };
    if (selectedDrinkId) {
      getRecipe();
    }
  }, [selectedDrinkId]);

  return (
    <ModalContext.Provider value={{ setSelectedDrinkId }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
