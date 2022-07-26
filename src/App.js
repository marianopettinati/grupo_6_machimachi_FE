import Header from './components/Header';
import Indicador from './components/Indicador';


function App() {
  return (
    <div className="App">
      
        <Header/>
        <Indicador categoria="productos" total="Soy el lenght del array de productos que vengo de la API" />

    </div>
  );
}

export default App;
