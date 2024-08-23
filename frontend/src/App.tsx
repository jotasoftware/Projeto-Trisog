import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes, Link }from 'react-router-dom'


//TODO ARRUMAR DEPOIS
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import HomePage from './pages/HomePage/HomePage'
import Layout from './pages/Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/' element={<HomePage />}></Route>
              </Route>
              <Route path='/login' element={<LoginPage />}></Route>
              <Route path='/register' element={<RegisterPage />}></Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
