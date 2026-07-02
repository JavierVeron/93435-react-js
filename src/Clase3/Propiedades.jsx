// Opción #1 - Recibir las props como objeto
/* const Propiedades = (props) => {
    console.log(props);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{props.academia}</h1>
                    <h3>{props.curso}</h3>
                    {props.children}
                </div>
            </div>
        </div>
    )
} */

import Curso from "./Curso"

// Opción #2 - Desestructurar las props
const Propiedades = ({academia, curso, curso2, children}) => {    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{academia}</h1>
                    <h2>{curso}</h2>
                    <Curso nombre={curso2} />
                    <div className="p-3 bg-secondary text-white">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propiedades