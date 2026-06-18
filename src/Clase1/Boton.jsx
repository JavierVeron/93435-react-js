const Boton = () => {
    const saludar = () => {
        const producto = {id:1, nombre:"Coca Cola", precio:5000};
        alert("Hola a Todos!");
        console.log("Cursando React JS en Coderhouse!");
        console.log(producto);
    }

    return (
        <button className="btn btn-primary btn-lg fw-bold" onClick={saludar}>Hacer Click!</button>
    )
}

export default Boton