import '../componentes/listbooks.css'

const ListBooks = ({juegos}) => {
   
    return  <div className="listbooks">
                <div className="img">
                    <p>{juegos.title}</p>
                    <img src={juegos.image} alt="img" />
                </div>
            </div>
}
    
   

export default ListBooks;