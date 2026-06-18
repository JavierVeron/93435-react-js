import hamburguesaConQueso from "../assets/hamburguesa-con-queso.png"

const Imagenes = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={"images/hamburguesa.png"} alt="Imagen #1" />
                </div>
                <div className="col-md-4">
                    <img src={hamburguesaConQueso} alt="Imagen #2" />
                </div>
                <div className="col-md-4">
                    <img src={"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar"} alt="Imagen #3" />
                </div>
            </div>
        </div>
    )
}

export default Imagenes