
import { useEffect, useState } from 'react';
import './App.css';
import CheckBox from './componentes/menu/CheckBox';
import ListVideo from './componentes/ListVideo';
import SearchComponent from './componentes/SearchComponent';
import { Route, Routes } from 'react-router-dom';
import VideojuegoForm from './componentes/VideojuegoForm';
//import {getCategories} from './componentes/api/VideoJuegosApi';

function App() {

  const [videoJuego, setJuego]=useState([]);
  const [categorias, setCategorias] = useState([]);
  const [plataforma, setPlataform] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [plataformasSeleccionadas, setPlataformasSeleccionadas] = useState([]);
  const [videoJuegoSeleccionados,setVideoJuegosSeleccionados] = useState([]);

  const FindVideoJuegos = async() => {
    const response = await fetch("http://localhost:3000/videojuegos");
    const data = await response.json();
    setJuego(data);
  }

  const downloadCategorias = async () => {
    const response = await fetch("http://localhost:3000/categories");
    const data = await response.json();
    setCategorias(data);
    
  }

  const dowloadPlataformas = async () => {
    const response = await fetch("http://localhost:3000/plataformas");
    const data = await response.json();
    //console.log(plataformas);
    setPlataform(data);
  }
  useEffect(()=>{
    downloadCategorias();
  },[videoJuego])

  const results = videoJuego.filter((videojuego) => {
    return categoriasSeleccionadas.some((categoriaId) => videojuego.categoria.includes(categoriaId.id)
    )});

  console.log(results);
  
  useEffect(()=>{
    FindVideoJuegos();
    dowloadPlataformas();
  },[])

  
  const onDeleteBook = (deleteBook) => {
    const newBooks = videoJuego.filter((book) => deleteBook !== book)
    setJuego(newBooks);
  }



  return (
    <div className="App">
     
      <CheckBox categorias={categorias}  plataformas={plataforma} videoJuego={videoJuego} setVideoJuegosSeleccionados={setVideoJuegosSeleccionados}
        setCategoriasSeleccionadas={setCategoriasSeleccionadas} categoriasSeleccionadas={categoriasSeleccionadas}
        setPlataformasSeleccionadas={setPlataformasSeleccionadas} plataformasSeleccionadas={plataformasSeleccionadas}/>
       
      <Routes>
      <Route  path='/buscar' element={<SearchComponent categorias={categorias} videoJuego={videoJuego} setJuego={setJuego}/> } />
        <Route path="/" element={<ListVideo juegos={videoJuego} setJuego={setJuego}  categorias= {categorias} categoriasSeleccionadas={categoriasSeleccionadas}
        plataformasSeleccionadas={plataformasSeleccionadas} onDeleteBook={onDeleteBook} />} />
        <Route path='/form' element={<VideojuegoForm />}/>
      </Routes>

     
        
    </div>
  );
}

export default App;
