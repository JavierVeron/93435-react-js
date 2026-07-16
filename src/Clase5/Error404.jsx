import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src="https://www.mcdonalds.com.ar/images/error/error.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1 className="fw-bold" style={{fontSize:"60px", fontWeight:"bolder"}}>Ooops...<br />Algo ha salido mal</h1>
                        <p>Parece que la página que buscas no existe</p>
                        <p><Link to={"/"} className="btn btn-warning">Volver</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404