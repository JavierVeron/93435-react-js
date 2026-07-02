import Efectos from "./Clase3/Efectos"
import Estados from "./Clase3/Estados"
import Eventos from "./Clase3/Eventos"
import Promesas from "./Clase3/Promesas"
import Propiedades from "./Clase3/Propiedades"

const Hola = () => {
  return (
    <button className="p-5 text-white bg-primary">Hola!</button>
  )
}

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          {/* <Estados /> */}
          {/* <Propiedades academia={"Coderhouse"} curso={"JavaScript"} curso2={"React JS//"}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis esse nisi hic dolores delectus quos qui expedita voluptatibus. Aliquid, ullam? Vel eius sunt dolor adipisci nobis, dolore molestiae saepe.</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel aperiam sequi accusantium cupiditate similique omnis, aliquid hic natus ex exercitationem! Commodi tenetur at eligendi fugit quidem ut, sunt qui.</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, modi. Iste incidunt, et deleniti quia similique deserunt perferendis corrupti, excepturi quaerat accusantium unde officia rerum omnis doloribus, ea autem tempore.</p>
            <Hola />
          </Propiedades> */}
          {/* <Eventos /> */}
          {/* <Efectos curso={"React JS"} /> */}
          <Promesas />
        </div>
      </div>
    </div>
  )
}

export default App
