import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import PanelWrapper from './components/PanelWrapper/PanelWrapper';
import Detail from './components/ProductDetails/ProductDetails';
import LastProduct from './components/LastProduct/LastProduct';
import * as S from './App.styles';
import './App.css'



function App() {
  return (
    <div className="App">
      
        <Header/>
        <S.Flex>
          <S.GrandViewport>
            <PanelWrapper title='Métricas'>
              <Panel Type='quantityProducts'/>
              <Panel Type='quantityUsers'/>     
              <Panel Type='quantityCategories'/>  
            </PanelWrapper>
            <div className='bottom'>
              <PanelWrapper title='Productos' direction={ 'column' }>
                  <Detail/>
              </PanelWrapper> 
              <PanelWrapper title='Último producto cargado' direction={ 'column' }>
                  <LastProduct/>
              </PanelWrapper> 
              
                <PanelWrapper title='Categorías' direction={ 'row' }>
                    <Panel Type='quantityGenreNiñas'/>
                    <Panel Type='quantityGenreNiños'/>
                    <Panel Type='quantityProductsSale' />
                  </PanelWrapper> 
                
            </div>
          </S.GrandViewport>
          <S.SmallViewport>
            
          </S.SmallViewport>
        </S.Flex>
        
        <Panel Type='lastUser'/>     
    </div>
  );
}

export default App;
