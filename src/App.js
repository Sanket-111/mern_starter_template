import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container">

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>

        </div>
        <Footer/>

      </Router>
    </>
  );
}

export default App;
