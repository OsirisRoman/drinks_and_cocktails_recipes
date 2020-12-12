import React, { useContext } from 'react';

import { CategoriasContext } from '../../Context/CategoriasContext';

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);

  return (
    <form className='col-12'>
      <fieldset className='text-center'>
        <legend>Search Drinks by Category or Ingredient</legend>
      </fieldset>

      <div className='row mt-4'>
        <div className='col-md-4'>
          <input
            name='nombre'
            className='form-control'
            type='text'
            placeholder='Search by Ingredient'
          />
        </div>
        <div className='col-md-4'>
          <select className='form-control' name='category'>
            <option>-- Category Selection --</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-4'>
          <input
            type='submit'
            className='btn btn-block btn-primary'
            value='Click to Search'
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
