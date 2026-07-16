import { useParams } from "react-router-dom";

const Productos = () => {
    const arrayProductos = [
        {id:1, nombre:"Hamburguesas", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar"},
        {id:2, nombre:"Sándwiches de Pollo", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$k5XhSNp5/200/200/original?country=ar"},
        {id:3, nombre:"Papas y Complementos", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar"},
        {id:4, nombre:"Bebidas", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar"},
        {id:5, nombre:"Postres", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kcXjLPM7/200/200/original?country=ar"},
        {id:6, nombre:"Ensaladas", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kGXmuT46/200/200/original?country=ar"}
    ];
    const {id} = useParams();
    const items = id ? arrayProductos.filter(item => item.id == id) : arrayProductos;

    return (
        <div className="container my-5">
            <div className="row">
                {
                    items.map(item => (
                        <div key={item.id} className="col-md-2">
                            <div className="card text-center border-0">
                                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                                <div className="card-body">
                                    <p className="card-text">{item.nombre}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Productos