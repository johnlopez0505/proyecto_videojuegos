import { deleteBook } from "./api/VideoJuegosApi";


const VideoJuego = ({videojuego, categorias, onDeleteBook}) => {


    const getCategoryNames = () => {
        const cat = categorias.find((categoria)=>categoria.id === videojuego.categoria);
        if (cat) {
          return cat.name;
        } else {
          return "No clasificado";
        }

      };

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
                <div className='description'>
                    <p>{videojuego.description.slice(0, 100)}...</p>
                </div>
                <a href="#openModal">Mostrar detalles</a>
                <p>Precio ${videojuego.precio}€</p>
                <p>La categoría es: {getCategoryNames()}</p>
                <button type='button'onClick={delVideojuego} className='button'>Borrar</button>
            </div>

    )
}

export default VideoJuego;