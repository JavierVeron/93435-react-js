import { useEffect, useState } from "react"

const Efectos = ({nombre}) => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const incrementarContador1 = () => {
        setContador1(contador1 + 1);
    }

    const incrementarContador2 = () => {
        setContador2(contador2 + 1);
    }

    console.log("1- Montaje del Componente");

    // Opción #1 => Con listas de dependencias vacías (se ejecuta 1 vez)
    useEffect(() => {
        console.log("2- Actualización del Componente");

        return (() => {
            console.log("3- Desmontaje del Componente");
        })
    }, [])

    // Opción #2 => Con listas de dependencias (pasamos los estados o props que vamos a controlar)
    /* useEffect(() => {
        console.log("2- Actualización del Contador #1");
    }, [contador1])

    useEffect(() => {
        console.log("2- Actualización del Contador #2");
    }, [contador2])

    useEffect(() => {
        console.log("2- Actualización de los 2 Contadores!");
    }, [contador1, contador2, nombre]) */

    // Opción #3 => Sin listas de dependencias (esta atento a cualquier evento)
    useEffect(() => {
        console.log("2- Actualización del Componente!");
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Efectos</h1>
                    <p>Contador #1: <b>{contador1}</b></p>
                    <p><button className="btn btn-primary" onClick={incrementarContador1}>Incrementar #1</button></p>
                    <p>Contador #2: <b>{contador2}</b></p>
                    <p><button className="btn btn-primary" onClick={incrementarContador2}>Incrementar #2</button></p>
                </div>
            </div>
        </div>
    )
}

export default Efectos