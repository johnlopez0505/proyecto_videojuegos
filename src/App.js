
import { useEffect, useState } from 'react';
import './App.css';
import CheckBox from './componentes/menu/CheckBox';
import ListVideo from './componentes/ListVideo';
import SearchComponent from './componentes/SearchComponent';
import { Link, Route, Routes } from 'react-router-dom';
import VideojuegoForm from './componentes/VideojuegoForm';
import Modal from './componentes/Modal';

function App() {

  const [videoJuego, setJuego]=useState([]);
  const [categorias, setCategorias] = useState([]);
  const [plataforma, setPlataform] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [plataformasSeleccionadas, setPlataformasSeleccionadas] = useState([]);
  const [videoJuegoSeleccionados,setVideoJuegosSeleccionados] = useState([]);
  const [ search, setSearch ] = useState("")
  

  
  const downloadCategorias = async () => {
    const response = await fetch("http://localhost:3200/categories");
    const data = await response.json();
    setCategorias(data);
    
  }

  const dowloadPlataformas = async () => {
    const response = await fetch("http://localhost:3200/plataformas");
    const data = await response.json();
    //console.log(plataformas);
    setPlataform(data);
  }

  const getVideoJuegos = async() => {
    const response = await fetch("http://localhost:3200/videojuegos");
    const data = await response.json();
    setJuego(data);
    setVideoJuegosSeleccionados(data)
  }


  useEffect(()=>{
    getVideoJuegos();
    downloadCategorias();
    dowloadPlataformas();
  },[])

  // const results = videoJuego.filter((videojuego) => {
  //   return categoriasSeleccionadas.some((categoriaId) => videojuego.categoria.includes(categoriaId.id)
  //   )});

  // console.log(results);
  

  // useEffect(()=>{
    
  // },videoJuego,videoJuegoSeleccionados);



  
  const onDeleteBook = (deleteBook) => {
    const newBooks = videoJuego.filter((book) => deleteBook !== book)
    setJuego(newBooks);
  }



  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/new">NewGame</Link>&nbsp;&nbsp;
        {/* <Link to="/game/id">DetailGame</Link>&nbsp;&nbsp; */}
        <Link to="/about">about</Link>
      </nav>
     
      <CheckBox categorias={categorias}  plataformas={plataforma} videoJuego={videoJuego} setJuego={setJuego} setVideoJuegosSeleccionados={setVideoJuegosSeleccionados}
        videoJuegoSeleccionados={videoJuegoSeleccionados} setCategoriasSeleccionadas={setCategoriasSeleccionadas} categoriasSeleccionadas={categoriasSeleccionadas}
        setPlataformasSeleccionadas={setPlataformasSeleccionadas} plataformasSeleccionadas={plataformasSeleccionadas} setSearch={setSearch} search={search}/>
       
      <Routes>
        <Route  path='/buscar' element={<SearchComponent categorias={categorias} videoJuego={videoJuego} setJuego={setJuego}/> } />
        {/* <Route path='/' element={<div></div>} /> */}
        <Route path="/" element={<ListVideo videoJuegos={videoJuego}  categorias= {categorias} plataforma={plataforma} setSearch={setSearch} search={search}
              onDeleteBook={onDeleteBook} />} />
        <Route path='/game/:id' element={<Modal videoJuego={videoJuego}/>} />
        <Route path='/form' element={<VideojuegoForm />}/>
      </Routes>

     
        
    </div>
  );
}

export default App;
