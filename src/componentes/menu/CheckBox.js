
import { useEffect, useState } from 'react';
import '../menu/checkbox.css';
const CheckBox = ({categories, plataformas, videoJuegos, setVideoJuegos}) => {
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
    const [plataformasSeleccionadas, setPlataformasSeleccionadas] = useState([]);
    const [categori,setCategori] = useState([]);
    //console.log(categories);
    //console.log(plataformas);
    const actualizar= ()=>{
       setCategori([...categoriasSeleccionadas, ...categories]);
    };
    useEffect(()=>{
        actualizar();
    },[categoriasSeleccionadas]);
    
   console.log(categories);
    
    const handleCheckboxChange = (categoria,isChecked) => {
        if (isChecked) {
            setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
        } 
        else {
            const updatedCategorias = categoriasSeleccionadas.filter(
              selectedCategoria => selectedCategoria !== categoria
            );
            setCategoriasSeleccionadas(updatedCategorias);
        };
   
    }
    

    const handleCheckboxChangePlataforma = (plataforma,isChecked) =>{
        if(isChecked) {
            setPlataformasSeleccionadas([...categoriasSeleccionadas,plataforma]);
        }
        else{
            const updatedPlataformas = plataformasSeleccionadas.filter(
                selectedPLataforma => selectedPLataforma !== plataforma
            );
            console.log(updatedPlataformas);
            setPlataformasSeleccionadas(updatedPlataformas);
            
        }
       
    };
     // Filtra los videojuegos según las categorías y plataformas seleccionadas
    const videojuegosFiltrados = videoJuegos.filter(videojuego =>
        categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(videojuego.categoria)
        ).filter(videojuego =>
            plataformasSeleccionadas.length === 0 || plataformasSeleccionadas.includes(videojuego.plataforma)
    
    );
    //console.log(videojuegosFiltrados);
    console.log(categoriasSeleccionadas);
   



    return ( <div className="checkBox">
                <p>Categorias</p>
                <nav className="menucheck_box">
                    {
                        categories.map(categoria =>
                            <div className="menu" key={categoria.id}> 
                                <label for="categoria">{categoria.name}</label>
                                <input  type={"checkbox"} 
                                        id={"categoria"}
                                        value={true}
                                        onChange={(event)=> handleCheckboxChange(categoria, event.target.checked)} 
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
                                <label for="plataformas">{plataforma.name}</label>
                                <input  type={"checkbox"} 
                                        id={"plataformas"}
                                        value={true}
                                        onChange={(event)=> handleCheckboxChangePlataforma(plataforma,event.target.checked)} 
                                        defaultChecked/>
                            </div>
                        )
                    }
                    
                </nav>
                <input type='text' placeholder='Buscar videojuego' className='input'/>
                
            </div>
        )
}

export default CheckBox;