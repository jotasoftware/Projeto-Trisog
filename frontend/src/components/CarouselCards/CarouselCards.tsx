import React, { useEffect, useState } from 'react'
import styles from './CarouselCards.module.css'
import Cards from '../Cards/Cards';
import Carousel from 'react-multi-carousel';
import Loader from '../Loader/Loader';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

interface CardsProps {
  id?: number;
  image?: string;
  cardType: "types" | "tours";
  city?: {
    id: number;
    name: string;
    country:{
      id: number;
      name: string;
    };
  };
  tour?: {
    id: number;
    name: string;
  };
  name?: string;
  review?: number;
  quant?: number;
  price?: number;
  duration?:number;
  minAge?: number, 
  maxPeople?: number, 
  dateStart?: string, 
  time?: number,
  overview?: string, 
  reviewAverage?: string,
  reviewQuant?: string
}

const CarouselCards: React.FC<CardsProps> = ({cardType}) => {
  const slidesToSlide= cardType === "types" ? 6 : 4
  const itemClass = cardType === "types" ? styles.typesItem : styles.toursItem
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<CardsProps[]>([])

  useEffect(() => {
    if(cardType === 'tours'){
      fecthDataTours();
    }else{
      fecthDataTypes();
    }
  }, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: slidesToSlide,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  
  const fecthDataTours = async () => {
    try {
      const response = await axios.get('http://localhost:3000/tours')
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error')
    }
  }

  const fecthDataTypes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/typestour')
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error')
    }
  }

  return (
    <>
      {loading ? <Loader /> :
        <div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={false}
          keyBoardControl={true}
          customTransition="transform 0.5s ease-in-out"
          transitionDuration={500}
          containerClass={styles.carouselContainer}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass={styles.dotListStyle}
          itemClass={itemClass}
          slidesToSlide={slidesToSlide}
        >
          {data.map((item, index) => (
            <Cards key={index} {...item}></Cards>
          ))}
        </Carousel>
      </div>
    }
    </>
  )
}

export default CarouselCards