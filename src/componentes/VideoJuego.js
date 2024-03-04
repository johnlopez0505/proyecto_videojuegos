
import { Link } from "react-router-dom";
import { deleteBook } from "./api/VideoJuegosApi";


const VideoJuego = ({videojuego, categorias, plataforma, onDeleteBook}) => {

    const getCategoryNames = (juego) => {
      return juego.categoria.map((categoriaId) => {
        const categoria = categorias.find((categoria) => categoria.id === categoriaId);
        return categoria ? categoria.name : "Categoría no encontrada";
      });
    };

    const getPlataformaName = (juego) => {
      return juego.plataforma.map((plataformaId) => {
        const plataformas = plataforma.find((plataforma) => plataforma.id === plataformaId);
        return plataformas? plataformas.name : "Plataforma no encontrada";
      });
    }

    const delVideojuego = async () => {
      const response = await deleteBook(videojuego);
      if (!response.error) {
        onDeleteBook(videojuego);
      }
    }

    return(
    
            <div className="img" key={videojuego.id}>
                <p>{videojuego.title}</p>
                <img src={videojuego.image} alt="img" />
                <p>{videojuego.date}</p>
                <div className='description' key={videojuego.id}>
                    <p>{videojuego.description.slice(0, 100)}...</p>
                </div>
                <h1><Link to={"/game/" + videojuego.id}>Mostrar detalles</Link></h1>
                <p>Precio ${videojuego.precio}€</p>
                <p>La categoría es: {getCategoryNames(videojuego).join(', ')}</p>
                <p>La Plataforma es: {getPlataformaName(videojuego).join(', ')}</p>
                <button type='button'onClick={delVideojuego} className='button'>Borrar</button>
            </div>

    )
}

export default VideoJuego;