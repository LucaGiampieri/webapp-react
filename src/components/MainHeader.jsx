//import Link di connessione rotte
import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header>
            <nav className="navbar" >
                <Link to={"/"} className="nav-title" >Bool Movies</Link>
            </nav>
        </header>
    )
}

export default MainHeader