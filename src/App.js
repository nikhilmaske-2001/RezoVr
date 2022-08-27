import './App.css';
import Contact from './components/Contact/Contact';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Rezoversity from './components/Rezoversity/Rezoversity';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Explore />
      <Rezoversity />
      <Contact />
    </div>
  );
}

export default App;
