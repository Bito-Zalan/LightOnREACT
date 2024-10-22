import { useContext } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';
import { KATTContext } from './context/kattContext';

function App() {
 
  const {lista} = useContext(KATTContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Light On</h1>
      </header>
      <article>
        <Jatekter lista={lista}/>
      </article>
      <footer>
        <p>Bitó Zalán</p>
      </footer>
    </div>
  );
}

export default App;
