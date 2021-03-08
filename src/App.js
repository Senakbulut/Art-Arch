import About from './About/About';
import './App.css';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Detail from './Gallery/Detail';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' exact component={About}/>
      <Route path='/gallery' exact component={Gallery}/>
      <Route path='/detail' exact component={Detail}/>
      <Route path='/contact' exact component={Contact}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
