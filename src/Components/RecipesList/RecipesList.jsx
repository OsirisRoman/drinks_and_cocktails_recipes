import React, { useContext } from 'react';

import Recipe from '../Recipe/Recipe';

import { RecetasContext } from '../../Context/RecetasContex';

const RecipesList = () => {
  const { drinksList } = useContext(RecetasContext);
  return (
    <div className='row mt-5'>
      {drinksList.map((drink) => {
        return (
          <Recipe
            key={drink.idDrink}
            drink={drink.strDrink}
            image={drink.strDrinkThumb}
            drinkId={drink.idDrink}
          />
        );
      })}
    </div>
  );
};

export default RecipesList;
