import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import PanelWrapper from './components/PanelWrapper/PanelWrapper';


function App() {
  return (
    <div className="App">
      
        <Header/>
        
        <PanelWrapper title='Cantidades' direction='row'>
          <Panel Type='quantityProducts'/>
          <Panel Type='quantityUsers'/>     
          <Panel Type='quantityCategories'/>  
        </PanelWrapper>
        <Panel Type='lastUser'/>     
        
        {/* <PanelWrapper title='Total de productos por categoria'>
          <Panel Type='quantityGenreNiñas'/>
          <Panel Type='quantityGenreNiños'/>
        </PanelWrapper> */}
    </div>
  );
}

export default App;
