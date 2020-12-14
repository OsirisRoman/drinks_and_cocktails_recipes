import React, { useContext } from 'react';

import Recipe from '../Recipe/Recipe';

import { RecetasContext } from '../../Context/RecetasContex';

const RecipesList = () => {
  const { recipes } = useContext(RecetasContext);
  return (
    <div className='row mt-5'>
      {recipes.map((receta) => {
        return <Recipe key={receta} recipe={receta} />;
      })}
    </div>
  );
};

export default RecipesList;
