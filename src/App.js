
import About from './About/About';
import './App.css';
import Gallery from './Gallery/Gallery';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
    </div>
  );
}

export default App;
