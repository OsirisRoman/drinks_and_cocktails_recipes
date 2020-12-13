import React, { useState, useContext } from 'react';

import { CategoriasContext } from '../../Context/CategoriasContext';
import { RecetasContext } from '../../Context/RecetasContex';

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    name: '',
    category: '',
  });
  const { categorias } = useContext(CategoriasContext);

  const { setSearching, setConsult } = useContext(RecetasContext);

  //
  const obtenerParametros = (e) => {
    e.preventDefault();
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const buscarRecetas = (e) => {
    e.preventDefault();
    setSearching(busqueda);
    setConsult(true);
  };

  return (
    <form className='col-12' onSubmit={buscarRecetas}>
      <fieldset className='text-center'>
        <legend>Search Drinks by Category or Ingredient</legend>
      </fieldset>

      <div className='row mt-4'>
        <div className='col-md-4'>
          <input
            name='name'
            className='form-control'
            type='text'
            placeholder='Search by Ingredient'
            onChange={obtenerParametros}
          />
        </div>
        <div className='col-md-4'>
          <select
            className='form-control'
            name='category'
            onChange={obtenerParametros}>
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
