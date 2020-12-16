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
          <h4
            className='container w-75 mt-5 mb-5 text-center bg-white p-3'
            style={{ borderRadius: '20px' }}>
            A web application that allows to find drink and cocktail recipes.
            This application was build on top of ReactJS making use of several
            react hooks and ContextAPI. This web app consumes all the data from
            an external API 🎉
          </h4>
          <div className='container mt-4'>
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
