
import { useEffect, useState } from 'react';
import './App.css';
import ListBooks from './componentes/ListBooks';
import CheckBox from './componentes/menu/CheckBox';

function App() {

  const [juegos, setJuego]=useState([]);
  const FindBooks = async() => {
    const response = await fetch(" http://localhost:3500/videojuegos");
    const videojuego = await response.json();
    setJuego(videojuego);
  }

  useEffect(()=>{
    FindBooks();
  },[])


  return (
    <div className="App">
      <CheckBox/>
      <div className='applist'>
        {
          juegos.map(juego =>
            <ListBooks juegos={juego}/>
          )
        }
      </div>
     
      
    </div>
  );
}

export default App;
