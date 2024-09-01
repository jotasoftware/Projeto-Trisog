import React, { useEffect, useState } from 'react'
import styles from './StarsReview.module.css'
import { FaStar } from 'react-icons/fa'

interface StarsProps {
    name: string;
    onRatingChange: (rating: number) => void;
    cleanAll: boolean;
  }

const StarsReview: React.FC<StarsProps> = ({name, onRatingChange, cleanAll}) => {
    const [rating, setRating] = useState<number>(0)
    const [hover, setHover] = useState<number>(0)

    useEffect(()=>{
        onRatingChange(rating)
    }, [rating, onRatingChange])
    useEffect(()=>{
        setRating(0)
        setHover(0)
    }, [cleanAll])

  return (
    <div className={styles.review}>
        <p>{name}</p>
        <div>
        {[...Array(5)].map((star, index )=> {
            const currentRating = index + 1;
            return (
                <label key={index}>
                    <input 
                        type="radio" 
                        name='rating'
                        value={currentRating}
                        onClick={() => ((rating == currentRating) ? setRating(0) : setRating(currentRating))}
                    />
                    <FaStar onMouseLeave={() => (rating>0) ? setHover(rating) : setHover(0)} onMouseEnter={() => setHover(currentRating)} color={currentRating <= (hover !== null ? hover : rating) ? '#ffc105' : '#e4e5e9'} size={20} strokeWidth={1} className={styles.star}/>
                </label>
            )
        })}
        </div>
    </div>
  )
}

export default StarsReview