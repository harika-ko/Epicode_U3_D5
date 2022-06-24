import './App.css';
import NavBar from './Components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import Gallery from './Components/Gallery-1';
import Gallery_2 from './Components/Gallery-2';
import Gallery_3 from './Components/Gallery-3';
import Gallery_4 from './Components/Gallery-4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Gallery />
        <Gallery_2 />
        <Gallery_3 />
        <Gallery_4 />
      </header>
    </div>
  );
}

export default App;
