import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      </header>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h2><strong>Artemisa</strong></h2>
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}

export default App;
