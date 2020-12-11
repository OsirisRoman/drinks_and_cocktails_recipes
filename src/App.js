import { Fragment } from 'react';

import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';

function App() {
  return (
    <Fragment>
      <Header titulo='Drinks and Cocktails Recipes Searcher' />

      <div className='container mt-5'>
        <div className='row'>
          <Formulario />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
