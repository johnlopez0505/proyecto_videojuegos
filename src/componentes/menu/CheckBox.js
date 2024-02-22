
import { useEffect, useState } from 'react';
import '../menu/checkbox.css';
import SearchComponent from '../SearchComponent';
const CheckBox = ({categorias, plataformas, videoJuego,setVideoJuegosSeleccionados,
        setCategoriasSeleccionadas, categoriasSeleccionadas,setPlataformasSeleccionadas
        ,plataformasSeleccionadas}) => {

   


   useEffect(()=>{
    console.log(categoriasSeleccionadas);
    console.log(plataformasSeleccionadas);
    //console.log(videoJuego);
    //setJuego(videoJuegoSeleccionados)
   },[categoriasSeleccionadas,plataformasSeleccionadas])
    


    const handleCheckboxChange = (event) => {
        if (!event.target.checked) {
            setCategoriasSeleccionadas([...categoriasSeleccionadas,event.target.value]);
            console.log(event.target.checked);

            
        } 
        else {
            console.log(event.target.checked);
            const updatedCategorias = categoriasSeleccionadas.filter(
              selectedCategoria => selectedCategoria !== event.target.value
            );
            setCategoriasSeleccionadas(updatedCategorias);
            console.log("no seleciocnada")
        };
   
    }
    

    const handleCheckboxChangePlataforma = (event) =>{
        
        if(!event.target.checked) {
            setPlataformasSeleccionadas([...plataformasSeleccionadas,event.target.value]);
        }
        else{
            const updatedPlataformas = plataformasSeleccionadas.filter(
                selectedPLataforma => selectedPLataforma !== event.target.value
            );
            //console.log(updatedPlataformas);
            setPlataformasSeleccionadas(updatedPlataformas);
            
        }
       
    };


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
                {/* <SearchComponent  categorias={categorias}/> */}
                
            </div>
        )
}

export default CheckBox;