import React, { useContext } from 'react';

import Recipe from '../Recipe/Recipe';

import { RecetasContext } from '../../Context/RecetasContex';

const RecipesList = () => {
  const { recipes } = useContext(RecetasContext);
  return (
    <div className='row mt-5'>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.idDrink}
            recipe={recipe.strDrink}
            image={recipe.strDrinkThumb}
          />
        );
      })}
    </div>
  );
};

export default RecipesList;
