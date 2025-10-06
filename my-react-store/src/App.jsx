import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
   <div className="app">
      <Navbar/>
      <main className="main-content">
        <h1>Welcome to my online store</h1>
        <p>Discover amazing products at incredible preices</p>
      </main>
      <Footer/>
   </div>
  )
}

export default App
