import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import styles from './CarouselTestimonials.module.css'

const CarouselTestimonials = () => {
  const testimonials = [
    {
      message: 'The UI designs he crafted are to notch, and the desing system he integrated allows for straight foward fizes and bulk updates.',
      autor: 'Joao Pedro'
    },
    {
      message: 'The UI designs he crafted are to notch, and the desing system he integrated allows for straight foward fizes and bulk updates.',
      autor: 'Joao Pedro'
    },
    {
      message: 'The UI designs he crafted are to notch, and the desing system he integrated allows for straight foward fizes and bulk updates.',
      autor: 'Joao Pedro'
    },
    {
      message: 'The UI designs he crafted are to notch, and the desing system he integrated allows for straight foward fizes and bulk updates.',
      autor: 'Joao Pedro'
    },
  ]
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        }
      }
    
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        arrows={false}
        ssr={true}
        infinite={false}
        keyBoardControl={true}
        customTransition="transform 0.5s ease-in-out"
        transitionDuration={500}
        containerClass={styles.carouselContainer}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass={styles.itemClass}
        slidesToSlide={1}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <p className={styles.testimonialMessage}>"{testimonial.message}"</p>
            <p className={styles.testimonialAuthor}>- {testimonial.autor}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselTestimonials