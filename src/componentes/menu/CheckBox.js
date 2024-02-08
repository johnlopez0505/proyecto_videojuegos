import '../menu/checkbox.css';
const CheckBox = (categorias) => {
    console.log(categorias);
    return ( <div className="checkBox">
                <p>Categorias</p>
                <nav className="menucheck_box">
                    {
                        categorias.map(categoria =>  
                             <div className="menu">
                                 <label for="menu-toggle">#{categoria}</label>
                                 <input type={"checkbox"} id={"menu-toggle"} checked/>
                            </div>)
                    }
                   

                </nav>


            </div>
        )
    

}

export default CheckBox;