import { useState } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';

function App() {
  const [lista, setLista] = useState([false,false, false, false, false, false, false, false, false]);
  function katt(index){
    const segedLista = [...lista]
    if (segedLista[index]) {
        segedLista[index] = false
    }else{
      segedLista[index] = true
    }
    setLista(
      segedLista
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Light On</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt}/>
      </article>
      <footer>
        <p>Bitó Zalán</p>
      </footer>
    </div>
  );
}

export default App;
