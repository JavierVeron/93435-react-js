import Logo from "./Logo"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <Logo />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header