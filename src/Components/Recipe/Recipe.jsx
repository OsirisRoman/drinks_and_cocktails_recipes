import React from 'react';

const Recipe = ({ recipe, image }) => {
  return (
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <h2 className='card-header'>{recipe}</h2>
        <img className='card-img-top' src={image} alt={`imagen de ${recipe}`} />
        <div className='card-body'>
          <button type='button' className='btn btn-block btn-primary'>
            See Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
