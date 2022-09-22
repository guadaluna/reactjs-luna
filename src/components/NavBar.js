import "./navbar.css";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
    <header className="barranav">
        <div className="navbar">
            <h2 className="nombre">
                Artemisa
            </h2>
        </div>
        <CartWidget />            
        <nav>
            <a href="" className="link">Home</a>
            <a href="" className="link">Productos</a>
            <a href="" className="link">Contacto</a>
        </nav>
    </header>

    );
}
export default NavBar;