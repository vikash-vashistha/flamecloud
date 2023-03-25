import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AppRoute } from './Routes/AppRoute';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoute />
      <Footer/>
    </div>
  );
}

export default App;
