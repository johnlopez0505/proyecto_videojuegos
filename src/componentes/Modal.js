import { useParams } from "react-router-dom";
import '../componentes/modal.css'
import { useEffect, useState } from "react";


const Modal = ({videoJuego}) => {
const[game, setGame]= useState({});
    
    const { id } = useParams();
    const juego = videoJuego.find((juego) => juego.id.toString() === id);  
    console.log(juego);
    useEffect(()=>{
        setGame(juego);
    },[game])

    return  <div className="container">
                <div className="img">
                    {/* <a href="#close" title="Close" className='close'>X</a> */}
                    <p>{game.title}</p>
                    <img src={game.image} alt="img" />
                    {/* <p>{juego.date}</p> */}
                    <div className='description'>
                        <p>{game.description}</p>
                    </div>
                    <p>Precio ${game.precio}€</p>
                    {/* <p>La categoría es: {getCategoryNames(juego).join(', ')}</p> */}
                </div>
            </div>
}

export default Modal;