import { useState } from 'react'
import {BrowserRouter, Route, Routes, Link }from 'react-router-dom'

import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import Layout from './pages/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import TourPackagePage from './pages/TourPackagePage/TourPackagePage'
import TourDetailsPage from './pages/TourDetailsPage/TourDetailsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/tourpackage' element={<TourPackagePage />}></Route>
                <Route path='/tourdetails' element={<TourDetailsPage />}></Route>
              </Route>
              <Route path='/login' element={<LoginPage />}></Route>
              <Route path='/register' element={<RegisterPage />}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
