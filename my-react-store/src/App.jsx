import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Admin from "./pages/admin";
;import About from "./pages/About";
import Home from "./pages/Home"
import Catalog from './pages/catalog';
import Notfound from "./pages/notfound";
import Cart from "./pages/cart"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuantityPicker from "./components/qtypicker";
import GlobalProvider from "./state/globalProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

   
function App() {
  
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="">
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/catalog" element={<Catalog/>}></Route> 
              <Route path="/about" element={<About/>}></Route>
              <Route path="/admin" element={<Admin/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="*" element={<Notfound/>}></Route>
              {/*<Route path="*" element={<Navigate to="/" repalce/>}></Route>*/}
            
            
            </Routes>
            
            <Footer/>
          </div>
      </BrowserRouter>
    </GlobalProvider> 
  )
}

export default App;