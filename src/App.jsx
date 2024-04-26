import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Product from './components/Product'
import SpecificCategory from './components/SpecificCategory'
import Order from './components/Order'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <div className={`app__routes`}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/category' element={<SpecificCategory />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
