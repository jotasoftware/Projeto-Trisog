import React from 'react'
import styles from './Cards.module.css'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { CiClock2 } from "react-icons/ci";
import { PiMountainsDuotone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

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
  quant?: number;
  price?: number;
  duration?:number;
  minAge?: number, 
  maxPeople?: number, 
  dateStart?: string, 
  time?: number,
  overview?: string, 
  averageReviews?: number,
  quantReviews?: number
}

const CardsTours: React.FC<CardsProps> = ({image, time, cardType, city, averageReviews, quant, price, name, id, quantReviews}) => {
  const navigate = useNavigate()
  const cardClick = () =>{
    navigate('/tourdetails', {state: {id}})
  }
  

  return (
    <>
    {cardType === "tours" ? (
      <div className='card' onClick={cardClick}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt="" />
          <div className={styles.heartIcon}>
            <FaRegHeart />
          </div>
        </div>
        <div className={styles.container}>
          <p className={styles.city}>{city?.name}, {city?.country?.name}</p>
          <h2>{name}</h2>
          <div className={styles.reviewLine}>
            <div>
              <span><FaStar size={14} strokeWidth={1}/>{averageReviews}</span>
              <p>{quantReviews} reviews</p>
            </div>
            <div>
              <p><CiClock2 size={14} style={{marginBottom: '2.5px'}}/> {time} days</p>
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
          <h2>{name}</h2>
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