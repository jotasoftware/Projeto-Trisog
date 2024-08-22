import React from 'react'
import styles from './CardTours.module.css'
import { FaClock, FaStar, FaHeart } from 'react-icons/fa'

const CardsTours = () => {
  const cards = [
    {
      city: 'London',
      tour: 'Buckinham Pallace',
      review: 4.8,
      quantReview: 15,
      price: 520
    }
  ]

  return (
    <div className='card'>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="https://picsum.photos/80/80" alt="" />
        <div className={styles.heartIcon}>
          <FaHeart />
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.city}>{cards[0].city}</p>
        <h2>{cards[0].tour}</h2>
        <div className={styles.reviewLine}>
          <div>
            <span><FaStar size={12}/>{cards[0].review}</span>
            <p>{cards[0].quantReview} reviews</p>
          </div>
          <div>
            <p><FaClock size={14}/> 7 days</p>
          </div>
        </div>
        <div className={styles.priceLine}>
          <p>Starting From</p>
          <p>${cards[0].price}</p>
        </div>
      </div>
    </div>
  )
}

export default CardsTours