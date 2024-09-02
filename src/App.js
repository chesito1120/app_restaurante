import logo from './logo.svg';
import './App.css';
//cuando quieres exportar del mismo componente, tienes que ponerlo entre {AdiosMundo} ya que no te deja exportatr por default dos compoenntes
//import HolaMundo, { AdiosMundo } from './components/HolaMundo';
 //lo conveniente es que cada uno tenga su import
//  import HolaMundo from './components/HolaMundo';
//  import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* para hacer la llamada de un componente se usa como etiqueta HTML y tambien siempre tiene que estar dentro del return solo se pone <se pone el nombre del componente 
        y se cierra con />       */ }
        {/* asi puedes reusar codigos, usar propiedades para que solo quede la plantilla y recuperas los datos que necesites  */ }
        <Saludar name ="ivan caballero" años= "28" />
        <Saludar name ="less perrillo guapo" años = "23" />
        

      </header>
    </div>
  );
}

export default App;
