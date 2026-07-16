import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink to={"/productos"} className="nav-link text-dark fw-bold" href="#">Productos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/en-familia"} className="nav-link text-dark fw-bold" href="#">En Familia</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/recetas"} className="nav-link text-dark fw-bold" href="#">Recetas del Futuro</NavLink>
            </li>
        </ul>
    )
}

export default NavBar