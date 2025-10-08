import NavBar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <div>
            <header>
                <NavBar />

            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout