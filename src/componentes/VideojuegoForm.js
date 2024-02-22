import { useState } from "react";
import { postBook } from "./api/VideoJuegosApi";


const VideojuegoForm = ({onSaveBook}) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [cover, setCover] = useState("");
    const [error, setError] = useState(false);

    const resetForm = () => {
        setTitle("");
        setAuthor("");
        setDescription("");
        setCover("");
        setError(false);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const videojuego = {title, author, description, cover};
        const response = await postBook(videojuego);

        if (!response.error) {
            setError(false);
            onSaveBook(response.data);
            resetForm();
        } else {
            setError(true);
        }
    }


    return  <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <span>Título</span>
                    <input  type="text"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <span>Autor</span>
                    <input  type="text"
                            value={author}
                            onChange={(e)=>setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                 <span>Descripción</span>
                    <input  type="text"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <span>Portada</span>
                    <input  type="text"
                            value={cover}
                            onChange={(e)=>setCover(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Alta</button>
                </div>
               
            </form>
}

export default VideojuegoForm;
