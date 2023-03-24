import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AppRoute } from './Routes/AppRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoute/>
    </div>
  );
}

export default App;
