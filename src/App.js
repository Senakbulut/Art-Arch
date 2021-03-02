
import About from './About/About';
import './App.css';
import Gallery from './Gallery/Gallery';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import VerticalNavbar from './VerticalNavbar/VerticalNavbar';
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
