import './assets/css/App.css';

// Importar componentes
//import Peliculas from './components/Peliculas';
import Router from './Router';

function App() {
  return (
    <div className="App">
        {<Router/>
        /*<Peliculas/>*/
        }
    </div>
  );
}

export default App;
