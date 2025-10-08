import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top">
            <div className="container p-3 d-flex">
                <ul className="nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-bold" to="/">
                            Home Page
                        </Link>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fw-bold" to="/product">
                            Product
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fw-bold" to="/about-us">
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-light fw-bold">
                            Modalità Budget
                        </button>
                    </li>

                </ul>
            </div>
        </nav>


    )
}

export default NavBar