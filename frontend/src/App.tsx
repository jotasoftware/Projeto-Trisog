import {BrowserRouter, Route, Routes}from 'react-router-dom'

import LoginPage from './pages/LoginPage/LoginPage'
import Layout from './pages/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ProtectedRoute from '././components/ProtectedRoute/ProtectedRoute';
import TourPackagePage from './pages/TourPackagePage/TourPackagePage'
import TourDetailsPage from './pages/TourDetailsPage/TourDetailsPage'
import ErrorPage from './pages/ErrorPage/ErrorPage';
import DestinationPage from './pages/DestinationPage/DestinationPage';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
                <Route path='/' element={<Layout />}>
                  <Route path='/' element={<HomePage />}></Route>
                  <Route path='*' element={<ErrorPage />}></Route>
                  <Route path="/tourpackage" element={<ProtectedRoute element={<TourPackagePage />} />} />
                  <Route path='/tourdetails' element={<ProtectedRoute element={<TourDetailsPage />} />}></Route>
                  <Route path='/destination' element={<DestinationPage />}></Route>
                </Route>
                <Route path='/login' element={<LoginPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
