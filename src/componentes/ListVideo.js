
import '../componentes/listvideo.css'
import VideoJuego from './VideoJuego';

const ListVideo = ({juegos, setJuego, categorias,onDeleteBook}) => { 
   

    

    return  <div className='container'> 

                    <div className='results'>

                    {
                    juegos.length === 0 ?
                        <p>No se han encontrado libros</p>
                        :""
                    } 
                
                    </div>
                {
                    juegos.map(videojuego =>
                        <>
                            <VideoJuego videojuego={videojuego} categorias={categorias} onDeleteBook={onDeleteBook}/>
                        
                        </>
                    )
                }
            </div>

}




export default ListVideo;