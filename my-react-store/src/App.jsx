import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuantityPicker from './components/qtypicker'
import Catalog from './pages/catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

   
function App() {
  
  return (
   <div className="App">
      <Navbar />
      <main className="main-content">
        <h1>Welcome to my online store!</h1>
        <p>Discover amazing  products at incredible prices.</p>
      </main>

      <Catalog/>
      <Footer/>
    </div>
  )
}

export default App;