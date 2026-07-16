import Footer from "./Clase5/Footer"
import Header from "./Clase5/Header"
import Logo from "./Clase5/Logo"
import NavBar from "./Clase5/NavBar"
import { Routes, Route } from "react-router-dom"
import Principal from "./Clase5/Principal"
import Productos from "./Clase5/Productos"
import EnFamilia from "./Clase5/EnFamilia"
import RecetasDelFuturo from "./Clase5/RecetasDelFuturo"
import Error404 from "./Clase5/Error404"
import Efectos from "./Clase5/Efectos"
import { useState } from "react"

function App() {
  const [visible, setVisible] = useState(true);

  const desmontarComponente = () => {
    setVisible(false);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Productos />} />
        <Route path="/en-familia" element={<EnFamilia />} />
        <Route path="/recetas" element={<RecetasDelFuturo />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* {visible ? <Efectos nombre={"Daniel"} /> : ""}
      <button className="btn btn-primary" onClick={desmontarComponente}>Desmontar Componente</button> */}
      <Footer />
    </>
  )
}

export default App
