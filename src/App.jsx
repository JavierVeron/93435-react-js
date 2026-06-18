import Boton from "./Clase1/Boton"
import Curso from "./Clase1/Curso"
import Imagenes from "./Clase1/Imagenes"
import Titulo from "./Clase1/Titulo"

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <Titulo />
          <Curso />
          <Curso />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex quia id ea consequatur sapiente explicabo minima officia hic. Pariatur consequatur deleniti excepturi cumque ipsam ipsa ea? Doloremque, enim earum.</p>
          <Imagenes />
          <Boton />
        </div>
      </div>
    </div>
  )
}

export default App
