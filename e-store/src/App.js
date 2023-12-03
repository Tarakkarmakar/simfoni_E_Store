import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navabar/Navbar';
import SearchProduct from './components/SerachProduct/SearchProduct';

function App() {
  return (
    <div className="App bg-slate-100">
      <Navbar />
      <SearchProduct />
    
    </div>
  );
}

export default App;
