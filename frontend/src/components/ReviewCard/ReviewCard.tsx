import React, { useEffect, useState } from 'react'
import styles from './ReviewCard.module.css'
import { FaStar } from 'react-icons/fa'
import {format} from 'date-fns'
import axios from 'axios'

type Review = {
    id?: number;
    services?: number,
    locations?: number,
    amenities?: number,
    prices?: number,
    food?: number,
    room?: number,
    average?: number
    name?: string
    emailAddress?: string
    comment?: string
    createdAt?: string
}

interface ReviewCardProps {
    review: Review
}


const ReviewCard: React.FC<ReviewCardProps> = ({review}) => {
    
  return (
    <div className={styles.reviewCard}>
        <div className={styles.imageContainerReview}>
            <img src="1.png" alt="" />
        </div>
        <div className={styles.detailsContainerReview}>
            <p className={styles.date}>{review.createdAt ? format(new Date(review.createdAt), 'MMMM dd, yyyy') : 'no date'}</p>
            <p className={styles.name}>{review.name}</p>
            <span><FaStar size={14} strokeWidth={1}/>{review.average}</span>
            <p className={styles.comment}>{review.comment}</p>
        </div>
    </div>
  )
}

export default ReviewCard