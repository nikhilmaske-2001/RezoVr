import './App.css';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Explore />
    </div>
  );
}

export default App;
