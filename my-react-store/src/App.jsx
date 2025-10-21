import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuantityPicker from './components/qtypicker'
import Catalog from './pages/catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

   
function App() {
  
  return (
    <BrowserRouter>
        <div className="">
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/catalog" element={<Catalog/>}></Route> 
              <Route path="/about" element={<About/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="*" element={<Navigate to="/" repalce/>}></Route>
            
            
            </Routes>
            
            <Footer/>
          </div>
    </BrowserRouter>
   
  )
}

export default App;