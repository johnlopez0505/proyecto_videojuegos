

const Modal = () => {
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
}

export default Modal;