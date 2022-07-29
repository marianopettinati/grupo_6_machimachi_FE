import { Card } from './components/Card/Card.styles';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import PanelWraper from './components/PanelWraper/PanelWraper';


function App() {
  return (
    <div className="App">
      
        <Header/>
        
        <Panel Type='quantityProducts'/>
        <Panel Type='quantityUsers'/>     
        <Panel Type='categories'/>    
        <Panel Type='lastUser'/>     
        <PanelWraper Title='Total de productos por categoria'>
          <Panel Type='quantityGenreNiñas'/>
          <Panel Type='quantityGenreNiños'/>
        </PanelWraper>
    </div>
  );
}

export default App;
