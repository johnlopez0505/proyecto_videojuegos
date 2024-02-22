import { useEffect, useState } from "react"
import '../componentes/listvideo.css'

const SearchComponent = ({categorias, setJuego, videoJuego}) => {
    const [ juegos, setVideojuego ] = useState([])
    const [ search, setSearch ] = useState("")
  
    // const URL = 'http://localhost:3000/videojuegos'
  
    const showData = async () => {
    //   const response = await fetch(URL)
    //   const data = await response.json()
      //console.log(data)
      setVideojuego(videoJuego)
    }   
     //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)   
    }
   
     const results = !search ? videoJuego : videoJuego.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

     useEffect( ()=> {
      showData()
    }, [])


    const getCategoryNames = (juego) => {
        return juego.categoria.map((categoriaId) => {
          const categoria = categorias.find((categoria) => categoria.id === categoriaId);
          return categoria ? categoria.name : "Categoría no encontrada";
        });
      };
    
    //renderizamos la vista
    return (
      <>
          <input type='text' value={search} onChange={searcher} placeholder='Buscar videojuego' className='input'/>
          <div className='container'> 
                {
                    results.map(juego =>
                        <>
                            <div className="img" key={juego.id}>
                                <p>{juego.title}</p>
                                <img src={juego.image} alt="img" />
                                <p>{juego.date}</p>
                                <div className='description'>
                                    <p>{juego.description.slice(0, 100)}...</p>
                                </div>
                                <a href="#openModal">Mostrar detalles</a>
                                <p>Precio ${juego.precio}€</p>
                                <p>La categoría es: {getCategoryNames(juego).join(', ')}</p>
                                <button type='button' className='button'>Borrar</button>
                            </div>
                            <div id="openModal" className='modalDialog'>
                                <div className='modalDescription'>
                                    <a href="#close" title="Close" className='close'>X</a>
                                    <p>{juego.title}</p>
                                    <img src={juego.image} alt="img" />
                                    <p>{juego.date}</p>
                                    <div className='description'>
                                        <p>{juego.description}</p>
                                    </div>
                                    <p>Precio ${juego.precio}€</p>
                                    <p>La categoría es: {getCategoryNames(juego).join(', ')}</p>
                                </div>
                            </div>
                        
                        </>
                    )
                }
            </div>
      </>
    )
  }
  export default SearchComponent