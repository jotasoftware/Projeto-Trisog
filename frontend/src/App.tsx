import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//TODO ARRUMAR DEPOIS
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'
import Footer from './components/Footer/Footer'
import CarouselCards from './components/CarouselCards/CarouselCards'
import ImageMosaic from './components/ImageMosaic/ImageMosaic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <SearchForm />
        <CarouselCards></CarouselCards>
        <ImageMosaic></ImageMosaic>
        <Footer />
      </div>
    </>
  )
}

export default App
