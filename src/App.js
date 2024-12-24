import logo from './logo.svg';
import './App.css';
import CarsList from './Cars.js';
import Header from './Header.js';
import Footer from './Footer.js';
function App() {
  return (
    <div className="App">
      <Header/> 
      <CarsList/>
      <Footer/>
    </div>
  );
}

export default App;
