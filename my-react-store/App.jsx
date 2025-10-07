import Navbar from './src/assets/components/Navbar';
import Footer from './src/assets/components/Footer';
import './App.css';
import QuantityPicker from './qtypicker';

function App() {
  

  return (
   <div className="app">
      <Navbar/>
      <main className="main-content">
        <h1>Welcome to my online store</h1>
        <p>Discover amazing products at incredible preices</p>
      </main>
      <Footer/>
      < QuantityPicker />
      < QuantityPicker />
      < QuantityPicker />
      < QuantityPicker />
   </div>
  )
}

export default App
