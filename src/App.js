import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';

import CategoriasProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/RecetasContex';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header titulo='Drinks and Cocktails Recipes Searcher' />

        <div className='container mt-5'>
          <div className='row'>
            <Formulario />
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
