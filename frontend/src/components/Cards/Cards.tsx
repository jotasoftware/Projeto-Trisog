import React from 'react'
import styles from './Cards.module.css'
import { FaClock, FaStar, FaRegHeart } from 'react-icons/fa'
import { PiMountainsDuotone } from "react-icons/pi";

interface CarouselCardsProps {
  cardType: "types" | "tours";
}

const CardsTours: React.FC<CarouselCardsProps> = ({cardType}) => {
  const cards = [
    {
      city: 'London',
      tour: 'Buckinham Pallace',
      review: 4.8,
      quantReview: 15,
      price: 520
    }
  ]
  const cardsTour = [
    {
      icon: 'London',
      type: 'Adventure',
      quant: 15,
      price: 520
    }
  ]

  return (
    <>
    {cardType === "tours" ? (
      <div className='card'>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="https://picsum.photos/80/80" alt="" />
          <div className={styles.heartIcon}>
            <FaRegHeart />
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
            <p className={styles.price}>${cards[0].price}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className='card'>
        <div className={styles.containerTour}>
          <PiMountainsDuotone size={24}/>
          <h2>{cardsTour[0].type}</h2>
          <p>{cardsTour[0].quant} Tours+</p>
          <div className={styles.priceLine}>
            <p>From</p>
            <p className={styles.price}>${cardsTour[0].price}</p>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default CardsTours