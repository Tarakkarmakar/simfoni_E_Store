import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navabar/Navbar';
import SearchProduct from './components/SerachProduct/SearchProduct';
import Carousel from './components/Carosel/Carosel';

function App() {
  return (
    <div className="App bg-slate-100">
      <Navbar />
      <SearchProduct />
      <Carousel />
    
    </div>
  );
}

export default App;
