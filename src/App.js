import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import PanelWrapper from './components/PanelWrapper/PanelWrapper';
import * as S from './App.styles';


function App() {
  return (
    <div className="App">
      
        <Header/>
        <S.Flex>
          <S.GrandViewport>
            <PanelWrapper title='Cantidades'>
              <Panel Type='quantityProducts'/>
              <Panel Type='quantityUsers'/>     
              <Panel Type='quantityCategories'/>  
            </PanelWrapper>
            <PanelWrapper title='Total de productos por categoria'>
                <Panel Type='quantityGenreNiñas'/>
                <Panel Type='quantityGenreNiños'/>
                <Panel Type='quantityProductsSale' />
              </PanelWrapper> 
          </S.GrandViewport>
          <S.SmallViewport>
            
          </S.SmallViewport>
        </S.Flex>
        
        <Panel Type='lastUser'/>     
        
        

        
    </div>
  );
}

export default App;
