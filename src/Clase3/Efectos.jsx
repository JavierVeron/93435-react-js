import { useEffect, useState } from "react";

const Efectos = ({curso}) => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [habilitar, setHabilitar] = useState(false);

    const incrementarContador1 = () => {
        setContador1(contador1 + 1);
    }

    const incrementarContador2 = () => {
        setContador2(contador2 + 1);
    }

    // Se dispara en el inicio del componente
    console.log("1- Montaje del Componente");

    // Opción #1 => Con un array [] sin dependencias (solo se ejecuta 1 vez)
    /* useEffect(() => {
        console.log("2- Actualización del Componente");
    }, []) */

    // Opción #2 => Con dependencias (funciona como listener, esta atento a las dependencias que le pasemos)
    /* useEffect(() => {
        console.log("2- Actualización del Componente, se modificó el Contador #1");
    }, [contador1])

    useEffect(() => {
        console.log("2- Actualización del Componente, se modificó el Contador #2");
    }, [contador2])

    useEffect(() => {
        console.log("2- Actualización del Componente, uno de los 2 estados se modificaron!");
    }, [contador1, contador2, curso]) */


    // Opción #3 => Sin dependencias, sin array, sin 2do parámetro (funciona como listener, esta atento a cualquiera cambio)
    /* useEffect(() => {
        console.log("2- Actualización del Componente, se modificó algún estado o prop!");
    }) */


    // Validación de Campo con useEffect
    useEffect(() => {
        /* if (email && contrasena) {
            setHabilitar(true);
        } else {
            setHabilitar(false);
        } */
        setHabilitar(email && contrasena ? true : false)
    }, [email, contrasena])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Efectos</h1>
                    <h2>{curso}</h2>
                    <p>Contador #1: <b>{contador1}</b></p>
                    <p><button className="btn btn-primary" onClick={incrementarContador1}>Incrementar #1</button></p>
                    <p>Contador #2: <b>{contador2}</b></p>
                    <p><button className="btn btn-primary" onClick={incrementarContador2}>Incrementar #2</button></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h3>Inicio de Sesión</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" value={contrasena} onInput={(e) => {setContrasena(e.target.value)}} />
                        </div>
                        <button type="submit" className={habilitar ? "btn btn-primary" : "btn btn-primary disabled"}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Efectos