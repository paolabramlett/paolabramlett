import './style.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
     
     <Routes>
       <Route path='/' element={ <Home />} />
       <Route path='/about' element={ <About />} />
       <Route path='/work' element={ <Work /> } />
       <Route path='/contact' element={ <Contact /> } />
     </Routes>

     <Footer />
   
    </div>
  );
}

export default App;
