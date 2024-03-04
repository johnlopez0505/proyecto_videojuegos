
import { useEffect, useState } from 'react';
import '../menu/checkbox.css';
import SearchComponent from '../SearchComponent';
const CheckBox = ({categorias, plataformas, videoJuego, setJuego, setVideoJuegosSeleccionados, videoJuegoSeleccionados,
        setCategoriasSeleccionadas, categoriasSeleccionadas,setPlataformasSeleccionadas
        ,plataformasSeleccionadas, setSearch, search}) => {
    
   

   useEffect(()=>{
        filtrarVideoJuegos();
   },[categoriasSeleccionadas,plataformasSeleccionadas])


    const handleCheckboxChange = (event) => {
        const selectedId = parseInt(event.target.value);
        if (!event.target.checked) {
            setCategoriasSeleccionadas([...categoriasSeleccionadas,selectedId]);
        } 
        else {
            console.log(event.target.checked);
            const updatedCategorias = categoriasSeleccionadas.filter(
              selectedCategoria => selectedCategoria !== selectedId
            );
            setCategoriasSeleccionadas(updatedCategorias);
        };
   
    }
    

    const handleCheckboxChangePlataforma = (event) =>{
        const selectedId = parseInt(event.target.value);
        if(!event.target.checked) {
            setPlataformasSeleccionadas([...plataformasSeleccionadas, selectedId]);
        }
        else{
            const updatedPlataformas = plataformasSeleccionadas.filter(
                selectedPLataforma => selectedPLataforma !== selectedId
            );
            setPlataformasSeleccionadas(updatedPlataformas);
            
        }
       
    };

    const filtrarVideoJuegos = () => {
        // Filtrar videojuegos por categoría
        const videojuegosFiltrados = videoJuegoSeleccionados.filter(juego => 
            !juego.categoria.every(categoria => categoriasSeleccionadas.includes(categoria)
            && juego.plataforma.every(plataforma => plataformasSeleccionadas.includes(plataforma)))
        );
        setJuego(videojuegosFiltrados);
    }

   

    return ( <div className="checkBox">
                <p>Categorias</p>
                <nav className="menucheck_box">
                    {
                        categorias.map(categoria =>
                            <div className="menu" key={categoria.id}> 
                                <label htmlFor={`categoria_${categoria.id}`}>{categoria.name}</label>
                                <input  type={"checkbox"} 
                                        id={`categoria_${categoria.id}`}
                                        value={categoria.id}
                                        onChange={handleCheckboxChange} 
                                        defaultChecked/> 
                            </div>
                        )
                    }
                    
                    
                </nav>
                <p>PLataformas</p>
                <nav className="menucheck_box1">
                    {
                        plataformas.map(plataforma =>
                            <div className="menu" key={plataforma.id}> 
                                <label htmlFor="plataformas">{plataforma.name}</label>
                                <input  type={"checkbox"} 
                                        id={"plataformas"}
                                        value={plataforma.id}
                                        onChange={handleCheckboxChangePlataforma} 
                                        defaultChecked /> 
                            </div>
                        )
                    }
                    
                </nav>
                <SearchComponent categorias={categorias} videoJuego={videoJuego} setJuego={setJuego} setSearch={setSearch} search={search}/>
                
            </div>
        )
}

export default CheckBox;