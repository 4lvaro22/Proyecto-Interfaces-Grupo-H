import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from "react-router-dom";
import {Funko} from "./../FunkoInfo";

export const Home = () => {

    console.log("Home");

    return (
        <>
        <div className="container-fluid my-3">
            <div className="row">
                <div class="input-group mb-2 w-25">
                    <input type="text" className="form-control" aria-label="Buscador" aria-describedby="Buscar"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                </div>
            </div>
        </div>

        {/*<-- Lado -->*/}
        <aside>  {/*<-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... -->*/}
            <h2>Filtros</h2>
        </aside>

        {/*<-- Seccion -->*/}
        <section>
            <h2>Catálogo</h2>
                <div className="funko" id="funko_harryPotter">
                    <a href="https://m.media-amazon.com/images/I/61rvig8NbQL.__AC_SX300_SY300_QL70_ML2_.jpg">
                    <Link to={"/Funko"}> <img src="https://m.media-amazon.com/images/I/61rvig8NbQL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Imagen de Funko" title="Funko Harry Potter"/> </Link> </a> 
                    <p>Harry Potter</p>
                    
                    <div className="funko_item_priceSection">
                        <p id="funko_harryPotter_price" className="funko_item_price"><strong>7.99 $</strong></p>

                        <Link to={"/Funko"}> <button id="funko_harryPotter_buy">Añadir a la cesta</button> </Link>
                        
                    </div>
                </div>
        </section>
        </>
    );
}
export default Home;