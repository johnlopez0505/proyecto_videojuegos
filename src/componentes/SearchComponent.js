import { useEffect, useState } from "react"
import '../componentes/listvideo.css'

const SearchComponent = ({categorias, setJuego, videoJuego,setSearch,search}) => {
   
    const searcher = (e) => {
        setSearch(e.target.value);   
    }

    const getCategoryNames = (juego) => {
        return juego.categoria.map((categoriaId) => {
          const categoria = categorias.find((categoria) => categoria.id === categoriaId);
          return categoria ? categoria.name : "Categoría no encontrada";
        });
      };
    
    return (
      <>
          <input type='text' value={search} onChange={searcher} placeholder='Buscar videojuego' className='input'/>
      </>
    )
  }
  export default SearchComponent