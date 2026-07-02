import { useEffect, useState } from "react";

const Promesas = () => {
    // 3 estados
    // Estado inicial => Pending (pendiente)
    // Pasa a un estado => Fullfilled (completa)
    // Rechace => Rejected (rechazado)
    const [error, setError] = useState(false);
    const [salida, setSalida] = useState("");
    const [usuarios, setUsuarios] = useState([]);

    const promesa = () => {
        return new Promise((resolve, rejected) => {
            //console.log("Promesa Pendiente");
            //resolve("Nos juntamos a ver el Partido!"); // Promesa completada
            rejected("No, no puedo porque se mword mi abuelo!"); // Promesa rechazada
        })
    }

    //console.log(promesa());
    promesa()
    .then(valor => {
        setError(false);
        setSalida(valor);
    })
    .catch(error => {
        setError(true);
        setSalida(error)
    })

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUsuarios(data);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Promesas</h1>
                    <p className={`p-3 text-white ${error ? "bg-danger" : "bg-secondary"}`}>{salida}</p>
                    <ul>
                        {
                            usuarios.map(item => (
                                <li key={item.id}>{item.name} ({item.username})</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Promesas