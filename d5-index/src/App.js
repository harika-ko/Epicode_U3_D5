import './App.css';
import NavBar from './Components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import Gallery from './Components/Gallery-1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Gallery />
      </header>
    </div>
  );
}

export default App;
