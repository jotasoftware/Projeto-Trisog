import React from 'react'
import styles from './CarouselCards.module.css'
import CardsTours from '../CardsTours/CardsTours';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselCards = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
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
        itemClass={styles.carouselItem}
        slidesToSlide={4}
      >
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
        <CardsTours></CardsTours>
      </Carousel>;
    </div>
  )
}

export default CarouselCards