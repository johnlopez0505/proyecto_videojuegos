
import '../componentes/listvideo.css'
import VideoJuego from './VideoJuego';

const ListVideo = ({videoJuegos, categorias, plataforma, setSearch, search, onDeleteBook}) => { 
   
    const results = !search ? videoJuegos : videoJuegos.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()));

    return  <div className='container'> 
        
                {
                    results.length === 0 || videoJuegos.length === 0 ? <div style={{margin:'auto'}}>
                        <p>No se han encontrado video juegos</p>
                    </div> :
                    results.map(videojuego =>
                        <>
                            <VideoJuego key={videojuego.id} videojuego={videojuego} categorias={categorias} plataforma={plataforma} setSearch={setSearch} onDeleteBook={onDeleteBook}/>
                        </>
                    )
                }
            </div>

}




export default ListVideo;