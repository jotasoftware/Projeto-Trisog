import React from 'react'
import styles from './ReviewRange.module.css'

interface ReviewRangeProps{
  name?: string
  review?: number
}

const ReviewRange: React.FC<ReviewRangeProps> = ({name, review = 0}) => {
  return (
    <div className={styles.lineContainer}>
      <div>
      <p>{name}</p>
        <div className={styles.lineSpan}> 
          <div className={styles.lineRange}>
            <div className={styles.lineReview} style={{width: `${review * 20}%`}}></div>
          </div>
          <span>{isNaN(review) ? 0 : review}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewRange