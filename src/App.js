import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import RecipesList from './Components/RecipesList/RecipesList';

import CategoriasProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/RecetasContex';
import ModalProvider from './Context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header titulo='Drinks and Cocktails Recipes Searcher' />

          <div className='container mt-5'>
            <div className='row'>
              <Formulario />
            </div>
            <RecipesList />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
