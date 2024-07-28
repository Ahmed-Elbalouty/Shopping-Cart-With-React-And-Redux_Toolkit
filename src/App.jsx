import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
