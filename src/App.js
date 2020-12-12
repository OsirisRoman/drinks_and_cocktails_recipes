import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import CategoriasProvider from './Context/CategoriasContext';

function App() {
  return (
    <CategoriasProvider>
      <Header titulo='Drinks and Cocktails Recipes Searcher' />

      <div className='container mt-5'>
        <div className='row'>
          <Formulario />
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
