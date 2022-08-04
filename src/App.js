import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import PanelWrapper from './components/PanelWrapper/PanelWrapper';
import ProductDetail from './components/ProductDetails/ProductDetails';
import LastProduct from './components/LastProduct/LastProduct';
import * as S from './App.styles';
import './App.css'



function App() {
  return (
    <div className="App">
      
        <Header/>
        <S.Flex>
          <S.GrandViewport>
            <S.Flex>
              <Panel Type='quantityProducts'/>
              <Panel Type='quantityUsers'/>     
              <Panel Type='quantityCategories'/>  
              <Panel Type='quantityProductsSale'/>
            </S.Flex>
            
            <S.Flex>
              <S.SmallViewport>
                <PanelWrapper title='Productos' direction={ 'column' }>
                      <ProductDetail/>
                  </PanelWrapper> 
              </S.SmallViewport>
  
              <PanelWrapper title='Último producto cargado' direction={ 'column' }>
                  <LastProduct/>
              </PanelWrapper> 
              
                <PanelWrapper title='Categorías' direction='column'>
                    <Panel Type='quantityGenreNiñas'/>
                    <Panel Type='quantityGenreNiños'/>        
                  </PanelWrapper> 
                
              </S.Flex>
          </S.GrandViewport>

        </S.Flex>   
    </div>
  );
}

export default App;
