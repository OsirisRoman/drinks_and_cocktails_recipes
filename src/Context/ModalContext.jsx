import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

//Crear el Context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //Provider State to store the drinkId
  const [selectedDrinkId, setSelectedDrinkId] = useState(null);
  //State that stores the recipe instructions
  const [recipeInstructions, setRecipeInstructions] = useState('');
  //State that stores the Ingredients recipe
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedDrinkId}`;
      const response = await axios.get(url);
      setRecipeInstructions(response.data.drinks[0].strInstructions);
      let ingredients = [];
      //extract all ingredients for the selected recipe
      for (let i = 0; i < 16; i++) {
        if (response.data.drinks[0][`strIngredient${i}`]) {
          ingredients.push(
            response.data.drinks[0][`strMeasure${i}`] +
              ' ' +
              response.data.drinks[0][`strIngredient${i}`]
          );
        }
      }
      setIngredientsList(ingredients);
    };
    if (selectedDrinkId) {
      getRecipe();
    }
  }, [selectedDrinkId]);

  return (
    <ModalContext.Provider
      value={{
        setSelectedDrinkId,
        recipeInstructions,
        setRecipeInstructions,
        ingredientsList,
        setIngredientsList,
      }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
