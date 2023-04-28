import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="productdetails/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
