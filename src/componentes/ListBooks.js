const ListBooks = ({juegos}) => {
    console.log(juegos);
    return <div>
                <p>{juegos.title}</p>
                <img src={juegos.image} alt="img" />
            </div>
}

export default ListBooks;