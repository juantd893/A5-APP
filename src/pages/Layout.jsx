import { Outlet, Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";
import { FaStar  } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";


const Layout = () => {
  return (
    <>

<script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js"></script>

      <nav className="navbar fixed-bottom  nava">
   
      <div class="container-fluid text-center">
      <div class="row">
        <ul className="  barra ">
          <div className="col-6 col-sm-8">
          <li className="boton_nav" >
        
            <Link to="/" className="colores"> <FaFilm /> <p>Cartelera</p></Link>
          
          </li>
          </div>
          <div className="col-6 col-sm-8">
          <li className="boton_nav"  >
            <Link to="/Sinopsis" className="colores"><FaStar /><p>Proximamente</p></Link>
          </li>
          </div>
          
          <div className="col-6 col-sm-8">
          <li className=" boton_nav" >
            <Link to="/Snack" className="colores">< FaHotdog /><p>Snack</p></Link>
          </li>
       </div>
          
        </ul>
        </div>
        </div>
      </nav>
    

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>
      <Outlet />
    </>
    
  )
};

export default Layout;