
import { useEffect, useState } from 'react';
import './App.css';
import CheckBox from './componentes/menu/CheckBox';
import ListVideo from './componentes/ListVideo';
//import {getCategories} from './componentes/api/VideoJuegosApi';

function App() {

  const [juegos, setJuego]=useState([]);
  const [categoria, setCategories] = useState([]);
  const [plataforma, setPlataform] = useState([]);

  const FindBooks = async() => {
    const response = await fetch("http://localhost:3000/videojuegos");
    const videojuego = await response.json();
    setJuego(videojuego);
  }

  const downloadCategories = async () => {
    const response = await fetch("http://localhost:3000/categories");
    const categorias = await response.json();
    setCategories(categorias);
    
  }

  const dowloadPlataform = async () => {
    const response = await fetch("http://localhost:3000/plataformas");
    const plataformas = await response.json();
    //console.log(plataformas);
    setPlataform(plataformas);
  }

  
  
  useEffect(()=>{
    FindBooks();
    downloadCategories();
    dowloadPlataform();
  },[])


  return (
    <div className="App">
      
      <CheckBox categories={categoria}  plataformas={plataforma} videoJuegos={juegos} setVideojuegos={setJuego} />
      <ListVideo juegos={juegos} categories= {categoria}/>
        
    </div>
  );
}

export default App;
