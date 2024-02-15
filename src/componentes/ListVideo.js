
import '../componentes/listvideo.css'

const ListVideo = ({juegos, categories}) => {    
    const getCategoryNames = (juego) => {
        return juego.categoria.map((categoriaId) => {
          const categoria = categories.find((categoria) => categoria.id === categoriaId);
          return categoria ? categoria.name : "Categoría no encontrada";
        });
      };

    return  <div className='container'> 
                {
                    juegos.map(juego =>
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
                            <div id="openModal" class="modalDialog">
                                <div>
                                    <a href="#close" title="Close" class="close">X</a>
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
}


export default ListVideo;