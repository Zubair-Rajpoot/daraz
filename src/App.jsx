import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Product from './components/Product'
import SpecificCategory from './components/SpecificCategory'
function App() {

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <BrowserRouter>
        <Navbar />
        <div className={`app`}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/category' element={<SpecificCategory />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
