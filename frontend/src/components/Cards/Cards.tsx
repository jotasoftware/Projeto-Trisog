import React from 'react'
import styles from './Cards.module.css'
import { FaRegHeart } from 'react-icons/fa'
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { PiMountainsDuotone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

interface CardsProps {
  id?: number,
  cardType: "types" | "tours",
  city?: string,
  tour?: string,
  type?: string,
  review?: number,
  quant?: number,
  price?: number,
}

const CardsTours: React.FC<CardsProps> = ({cardType, city, tour, review, quant, price, type, id}) => {
  const navigate = useNavigate()
  const cardClick = () =>{
    navigate('/tourdetails', {state: {id}})
  }

  

  return (
    <>
    {cardType === "tours" ? (
      <div className='card' onClick={cardClick}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="https://picsum.photos/80/80" alt="" />
          <div className={styles.heartIcon}>
            <FaRegHeart />
          </div>
        </div>
        <div className={styles.container}>
          <p className={styles.city}>{city}</p>
          <h2>{tour}</h2>
          <div className={styles.reviewLine}>
            <div>
              <span><CiStar size={16} strokeWidth={1}/>{review}</span>
              <p>{quant} reviews</p>
            </div>
            <div>
              <p><CiClock2 size={14} style={{marginBottom: '2.5px'}}/> 7 days</p>
            </div>
          </div>
          <div className={styles.priceLine}>
            <p>Starting From</p>
            <p className={styles.price}>${price}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className='card'>
        <div className={styles.containerTour}>
          <PiMountainsDuotone size={24}/>
          <h2>{type}</h2>
          <p>{quant} Tours+</p>
          <div className={styles.priceLine}>
            <p>From</p>
            <p className={styles.price}>${price}</p>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default CardsTours