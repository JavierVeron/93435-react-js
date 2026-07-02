import { useState } from "react"

const Eventos = () => {
    const hacerClick = () => {
        alert("Hiciste Click!")
    }

    const [estado, setEstado] = useState("Desactivado");
    const cambiarEstado = () => {
        setEstado(estado == "Activado" ? "Desactivado" : "Activado");
    }

    const [texto, setTexto] = useState("");
    const [pais, setPais] = useState("");

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    <h2>Evento onClick</h2>
                    <button className="btn btn-primary" onClick={hacerClick}>Click!</button>
                    <div className="form-check form-switch">
                    <label className="form-check-label" htmlFor="switch">Estado: <b>{estado}</b></label> <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={cambiarEstado} />
                    </div>
                    <hr />
                    <h2>Evento onInput</h2>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Contenido</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={texto} onInput={(e) => {setTexto(e.target.value)}} />
                    <p>Cantidad de caracteres: <span className={texto.length > 10 ? "text-danger" : ""}>{texto.length}</span></p>
                    <p>{texto}</p>
                    </div>
                    <hr />
                    <h2>Evento onChange</h2>
                    <select onChange={(e) => {setPais(e.target.value)}} className="form-control">
                        <option value="">Seleccione un Pais</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Chile">Chile</option>
                        <option value="Uruguay">Uruguay</option>
                    </select>
                    {pais && <p>País seleccionado: <b>{pais}</b></p>}
                </div>
            </div>
        </div>
    )
}

export default Eventos