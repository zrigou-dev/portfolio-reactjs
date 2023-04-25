import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import NavBar from './component/NavBar/NavBar';
import Portfolio from './component/Portfolio/Portfolio';
import Skils from './component/Skils/Skils';


function App() {
  return (
    <div className="App">
    <NavBar  fixed="top"/>
    <Header/>
    <About/>
    <Skils/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
