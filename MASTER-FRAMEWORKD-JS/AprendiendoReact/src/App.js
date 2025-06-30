import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Siderbar from './components/Siderbar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function App() {
  return (
    <div className="App">
      <Header/>

      <Slider/>

      <div className="center">
        
        <SeccionPruebas/>
        <Siderbar/>
        <div className="clearfix"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
