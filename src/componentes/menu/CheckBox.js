import '../menu/checkbox.css';
const CheckBox = () => {
    return ( <div className="checkBox">
                <p>Categorias</p>
                <nav className="menucheck_box">
                    <div className="menu">
                        <label for="menu-toggle">Lucha</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked capture/>
                    </div>
                   
                    <div className="menu">
                        <label for="menu-toggle">Arcade</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked/>
                    </div>
                    
                    <div className="menu">
                        <label for="menu-toggle">Fantasia</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked/>
                    </div>

                    <div className="menu">
                        <label for="menu-toggle">Shooter</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked capture/>
                    </div>
                   
                    <div className="menu">
                        <label for="menu-toggle">Estrategia</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked/>
                    </div>
                    
                    <div className="menu">
                        <label for="menu-toggle">Logica</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked/>
                    </div>

                    <div className="menu">
                        <label for="menu-toggle">Deporte</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked/>
                    </div>
                    
                    <div className="menu">
                        <label for="menu-toggle">Aventura</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked/>
                    </div>

                    <div className="menu">
                        <label for="menu-toggle">Rol</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked capture/>
                    </div>
                   
                    <div className="menu">
                        <label for="menu-toggle">Educació</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked/>
                    </div>
                    
                    <div className="menu">
                        <label for="menu-toggle">Acción</label>
                        <input type={"checkbox"} id={"menu-toggle"} checked/>
                    </div>

                    

                </nav>


            </div>
        )
    

}

export default CheckBox;