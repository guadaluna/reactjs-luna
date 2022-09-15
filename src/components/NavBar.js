import "./navbar.css";

function NavBar() {
    return (
    <header>
        <div className="navbar">
            <h2 className="nombre">
                Artemisa
            </h2>
        </div>            
        <nav>
            <a href="" className="link">Home</a>
            <a href="" className="link">Productos</a>
            <a href="" className="link">Contacto</a>
        </nav>
    </header>

    );
}
export default NavBar;