import React from 'react'
import styles from './CarouselCards.module.css'
import Cards from '../Cards/Cards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselCardsProps {
  cardType: "types" | "tours";
}

const CarouselCards: React.FC<CarouselCardsProps> = ({cardType}) => {
  const slidesToSlide= cardType === "types" ? 6 : 4
  const itemClass = cardType === "types" ? styles.typesItem : styles.toursItem
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


  return (
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
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
        <Cards cardType={cardType}></Cards>
      </Carousel>
    </div>
  )
}

export default CarouselCards