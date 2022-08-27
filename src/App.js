import './App.css';
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
    </div>
  );
}

export default App;
