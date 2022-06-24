import './App.css';
import NavBar from './Components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import Gallery from './Components/Gallery-1';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Gallery name="harry%20potter" title="Harry Potter" />
        <Gallery name="Lord%20of%20the%20Rings" title="Lord of The Rings" />
        <Gallery name="Spider%20Man" title="Spider Man" />
        <Gallery name="Titanic" title="Titanic" />
        <br></br><br></br><br></br>
        <ProfilePage />
      </header>
    </div>
  );
}

export default App;
