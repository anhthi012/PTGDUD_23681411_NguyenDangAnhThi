import { useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import ProductDetails from './components/ProductDetails'
import Products from './components/Products'
import DashBoard from './components/DashBoard'
import Profile from './components/Profile'
import Order from './components/Orders'
import Settings from './components/Settings'
import Checkout from './components/Checkout'
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  return (
    <>


      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Routes>
        <Route path='/dashboard' element={<DashBoard />}>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='order' element={<Order />}></Route>
          <Route path='settings' element={<Settings />}></Route>
        </Route>
      </Routes> */}

      {/* <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes> */}

      {/* <nav>
        <Link to='/'>Home</Link>|
        <Link to='/about'>About</Link>|
        <Link to='/contact'>Contact</Link>
      </nav>

      <nav>
        <Link to='/dashboard'>Dashboard</Link><br />
        <Link to='/dashboard/profile'>Profile</Link>|
        <Link to='/dashboard/order'>Order</Link>|
        <Link to='/dashboard/settings'>Settings</Link>
      </nav> */}



      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/orders"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
      </Routes>





    </>
  )
}

export default App
