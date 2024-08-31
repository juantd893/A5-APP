import { useState } from "react";
import data from "./proximamente.json";








function Proximamente (className){




  const [movie, setMovie] = useState("");
  const [isVisible, setIsVisible] = useState(false);



  const detalle = data.filter(peli =>
    peli.key_id === movie
  );



  const detalle_filt = detalle.map(infor =>
    <div>
    
      <p>
        <b className="titulo">{infor.titulo}:</b>
      </p>
      <p>
        <b className="movie_info_txt">{infor.sinopsis}:</b>
      
      </p>
      <p><span id="boton" className="btn btn-primary sinopsisb_btn">regresar</span></p>
    </div>
  );

  

  
  return (
 <>
<div className="Sinopsis_div">

  <p>{detalle_filt}</p>


</div>


    <div className="cartelera_div" >
      
      <p className="cartelera_titu">Proximamente</p>
      <div className="container-fluid">

        {data.map((user) => (
          <div className="tarjeta">
            
            <div className="item">
              <img
                src={"http://azteca5.com.mx/img/" + user.imagen}
                alt={"azteca5.com.mx/img/" + user.titulo}
                className="poster"
                width="100"
              />
            
            </div>
            <div className="item">
              <p className="titulo">{user.titulo}</p>
              <p className="movie_info_txt">
                <span>{user.duracion}</span> l <span>{user.idioma}</span> l{" "}
                <span>{user.genero}</span>
              </p>
              <p className="horario_div">
                <span className="btn btn-primary hora">{user.h1}</span>{" "}
                <span className="btn btn-primary hora">{user.h2}</span>{" "}
                <span className="btn btn-primary hora">{user.h3}</span>{" "}
                <span className="btn btn-primary hora">{user.h4}</span>{" "}
                <span className="btn btn-primary hora">{user.h5}</span>{" "}
                <span className="btn btn-primary hora">{user.h6}</span>{" "}
                <span className="btn btn-primary hora">{user.h7}</span>{" "}
                <span className="btn btn-primary hora">{user.h8}</span>{" "}
                <span className="btn btn-primary hora">{user.h9}</span>
                <span className="btn btn-primary hora">{user.h10}</span>
              </p>
              <p>
              <span id="boton" onClick={ () => setMovie(user.key_id)} className="btn btn-primary sinopsis_btn_p">SINOPSIS</span>
              </p>
            </div>
          
          </div>
          
        ))}
      </div>

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


    </div>
  
    </>
    
  );
};







function Cards_dos(){

return (
<>
<Proximamente />

</>
)

}







export default Cards_dos;