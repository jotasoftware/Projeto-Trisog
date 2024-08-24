import React, { useEffect, useState } from 'react'
import styles from './CarouselCards.module.css'
import Cards from '../Cards/Cards';
import Carousel from 'react-multi-carousel';
import Loader from '../Loader/Loader';
import 'react-multi-carousel/lib/styles.css';

interface CardsProps {
  id?: number;
  cardType: "types" | "tours";
  city?: string;
  tour?: string;
  type?: string;
  review?: number;
  quant?: number;
  price?: number;
}

const CarouselCards: React.FC<CardsProps> = ({cardType}) => {
  const slidesToSlide= cardType === "types" ? 6 : 4
  const itemClass = cardType === "types" ? styles.typesItem : styles.toursItem
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
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
  let cardProps: CardsProps
  if(cardType === 'tours'){
    cardProps = {
      id: 1,
      cardType: cardType,
      city: 'London',
      tour: 'Buckinham Pallace',
      review: 4.8,
      quant: 15,
      price: 520
    }
  }else{
    cardProps = {
      id: 2,
      cardType: cardType,
      type: 'Adventure',
      quant: 15,
      price: 520
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass={styles.dotListStyle}
          itemClass={itemClass}
          slidesToSlide={slidesToSlide}
        >
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
          <Cards {...cardProps}></Cards>
        </Carousel>
      </div>
    }
    </>
  )
}

export default CarouselCards