import React, { useContext } from 'react';

import { ModalContext } from '../../Context/ModalContext';

const Recipe = ({ drink, image, drinkId }) => {
  //Get context values
  const { setSelectedDrinkId } = useContext(ModalContext);

  return (
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <h2 className='card-header'>{drink}</h2>
        <img className='card-img-top' src={image} alt={`imagen de ${drink}`} />
        <div className='card-body'>
          <button
            type='button'
            className='btn btn-block btn-primary'
            onClick={() => {
              setSelectedDrinkId(drinkId);
            }}>
            See Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
