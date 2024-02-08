
import { useEffect, useState } from 'react';
import './App.css';
import CheckBox from './componentes/menu/CheckBox';
import ListVideo from './componentes/ListVideo';
//import {getCategories} from './componentes/api/VideoJuegosApi';

function App() {

  const [juegos, setJuego]=useState([]);
  const [categoria, setCategories] = useState([]);

  const FindBooks = async() => {
    const response = await fetch("http://localhost:3500/videojuegos");
    const videojuego = await response.json();
    setJuego(videojuego);
  }

  const downloadCategories = async () => {
    const response = await fetch("http://localhost:3500/categories");
    const categorias = await response.json();
    console.log(categorias);
    setCategories(categorias);
    
  }

  downloadCategories();
  
  useEffect(()=>{
    FindBooks();
  },[])


  return (
    <div className="App">
      <CheckBox categories={categoria} />
      <div className='applist'>
        {
          juegos.map(juego =>
            <ListVideo juegos={juego}/>
          )
        }
      </div>
     
      
    </div>
  );
}

export default App;
