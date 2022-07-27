import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';


function App() {
  return (
    <div className="App">
      
        <Header/>
        
        <Panel Type='quantityProducts'/>
        <Panel Type='quantityUsers'/>
    </div>
  );
}

export default App;
