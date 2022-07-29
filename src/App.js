import { Card } from './components/Card/Card.styles';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import PanelWrapper from './components/PanelWrapper/PanelWrapper';


function App() {
  return (
    <div className="App">
      
        <Header/>
        
        <Panel Type='quantityProducts'/>
        <Panel Type='quantityUsers'/>     
        <PanelWrapper Title='Total de productos por categoria'>
          <Panel Type='quantityGenreNiñas'/>
          <Panel Type='quantityGenreNiños'/>
        </PanelWrapper>
    </div>
  );
}

export default App;
