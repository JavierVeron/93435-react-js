import { useState } from "react";

const Estados = () => {
    let contador1 = 0;
    //contador1++;
    const [contador2, setContador2] = useState(0);

    const incrementarContador = () => {
        contador1++;
        setContador2(contador2 + 1);
        console.log(contador1);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>States</h1>
                    <p>Contador #1: <b>{contador1}</b> (variable)</p>
                    <p>Contador #2: <b>{contador2}</b> (estado)</p>
                    <p><button className="btn btn-primary" onClick={incrementarContador}>Incrementar</button></p>
                </div>
            </div>
        </div>
    )
}

export default Estados