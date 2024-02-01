
import { useEffect, useState } from 'react';
import './App.css';
import ListBooks from './componentes/ListBooks';

function App() {

  const [juegos, setJuego]=useState([]);
  const FindBooks = async() => {
    const response = await fetch(" http://localhost:3500/results");
    const videojuego = await response.json();
    setJuego(videojuego[0]);
    console.log(videojuego[0]);
  
  }

  useEffect(()=>{
    FindBooks();
  },[])


  return (
    <div className="App">
      {
        juegos.map(juego =>
          <ListBooks juegos={juego}/>
        )
      }
      
    </div>
  );
}

export default App;
