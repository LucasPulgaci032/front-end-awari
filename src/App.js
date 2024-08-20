
import './index.css'; 
import OutraLista from './outraLista';
import './index.css';
function App() {
  const meusIntens = [`Lucas`,'Gabriel','Pedro','Diego',]
  return (
    <div id="root" ><h1>Lista de usuarios</h1> 
    <OutraLista itens={meusIntens} id="lista"/>
    </div>
   
  );
}

export default App;
