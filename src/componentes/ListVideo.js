import '../componentes/listvideo.css'

const ListVideo = ({juegos}) => {
   
    return  <div className="listVideo">
                <div className="img">
                    <p>{juegos.title}</p>
                    <img src={juegos.image} alt="img" />
                    <p>{juegos.date}</p>
                    <div className='description'>
                        <p>{juegos.description}</p>
                    </div>
                   
                </div>
            </div>
}
    
   

export default ListVideo;