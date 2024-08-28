import React from 'react'
import { useLocation } from 'react-router-dom'
import PriceCard from '../../components/PriceCard/PriceCard'
import styles from './TourDetails.module.css'
import { BsCameraVideo } from "react-icons/bs";
import { CiImageOn, CiLocationOn, CiStar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import ReviewRange from '../../components/ReviewRange/ReviewRange';

const TourDetailsPage = () => {
  const location = useLocation()
  const {id} = location.state
  const tour = {
    id: 1,
    city: 'London',
    country: 'United Kingdom',
    name: 'Buckinham Pallace',
    type: 'Type',
    quant: 15,
    price: 520, 
    days: 7,
    maxPeople: 25,
    minAge: 12,
    averageReview: 4.8,
    overview: 'London, the capital of England and the United Kingdom, is a city rich in history, culture, and diversity. With a multicultural population, London is a true melting pot of cultures, languages, and traditions. The city is famous for its iconic landmarks, such as Big Ben, Buckingham Palace, and the Tower of London, each with its own fascinating history. Beyond the tourist attractions, London is a global hub for business, finance, and the arts, attracting millions of visitors every year. London, the capital of England and the United Kingdom, is a city rich in history, culture, and diversity. With a multicultural population, London is a true melting pot of cultures, languages, and traditions. The city is famous for its iconic landmarks, such as Big Ben, Buckingham Palace, and the Tower of London, each with its own fascinating history. Beyond the tourist attractions, London is a global hub for business, finance, and the arts, attracting millions of visitors every year.'
  }

  const reviews = {
    services: 4.0,
    locations: 2.8,
    amenities: 3.8,
    prices: 4.5,
    food: 3.5,
    room: 4.9
  }

  const classificationContent = () => {
    if(tour.averageReview > 4){
      return <p>Excellent</p>
    }else if(tour.averageReview > 3){
      return <p>Very Good</p>
    }else if(tour.averageReview > 2){
        return <p>Good</p>
    }else if(tour.averageReview > 1){
        return <p>Fair</p>
    }else if(tour.averageReview > 0){
        return <p>Poor</p>
    }
  }
  return (
    <div className={styles.container}>
      <PriceCard price={tour.price} days={tour.days} />
      <main>
        <section className={styles.imageSection}>
          <img className={styles.image} src="https://picsum.photos/80/80" alt="" />
          <div className={styles.imageButtons}>
            <button><span>Video</span> <BsCameraVideo></BsCameraVideo></button>
            <button><span>Gallery</span> <CiImageOn /></button>
          </div>
        </section>

        <section className={styles.titleSection}>
          <div className={styles.cityLine}>
            <div>
              <CiLocationOn size={25} strokeWidth={1.1}></CiLocationOn>
              <p>{tour.city}, {tour.country}</p>
              <a href="#mapTour">View on map</a>
            </div>
            <div className={styles.iconsDiv}>
              <IoShareSocialOutline size={18} className={styles.icons}/>
              <FaRegHeart size={18} className={styles.icons}/>
            </div>
          </div>
          <h1>{tour.name}</h1>
        </section>

        <section className={styles.detailsSection}>
          <div className={styles.detailPrice}>
            <h6>From</h6>
            <p className={styles.detailColor}>${tour.price}</p>
          </div>
          <div className={styles.detailDuration}>
            <h6>Duration</h6>
            <p className={styles.detailBlack}>{tour.days} days</p>
          </div>
          <div className={styles.detailMaxPeople}>
            <h6>Max People</h6>
            <p className={styles.detailBlack}>{tour.maxPeople}</p>
          </div>
          <div className={styles.detailMinAge}>
            <h6>Min Age</h6>
            <p className={styles.detailBlack}>{tour.minAge}+</p>
          </div>
          <div className={styles.detailTourType}>
            <h6>Tour Type</h6>
            <p className={styles.detailReviews}>{tour.type}</p>
          </div>
          <div className={styles.detailAverageReview}>
            <h6>Review</h6>
            <div>
              <FaStar size={14} strokeWidth={1} className={styles.starDetail}/>
              <p>{tour.averageReview}</p>
              <p>({tour.quant} reviews)</p>
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <h2 className={styles.title}>Overview</h2>
          <p>{tour.overview}</p>
        </section>

        <section className={styles.mapSection}>
          <h2 className={styles.title}>Map</h2>
          <p>Map</p>
        </section>

        <section className={styles.averageReviewSection}>
          <h2 className={styles.title}>Average Reviews</h2>
           <div className={styles.averageReviewContainer}>
            <div className={styles.firstColumn}>
              <span>{tour.averageReview}</span>
              <div>
                <FaStar size={14} strokeWidth={1} className={styles.starAverage}/>
                <p>{classificationContent()}</p>
              </div>
            </div>
            <div className={styles.secondColumn}>
              <ReviewRange name='Services' review={reviews.services}></ReviewRange>
              <ReviewRange name='Locations' review={reviews.locations}></ReviewRange>
              <ReviewRange name='Amenities' review={reviews.amenities}></ReviewRange>
              <ReviewRange name='Prices' review={reviews.prices}></ReviewRange>
              <ReviewRange name='Food' review={reviews.food}></ReviewRange>
              <ReviewRange name='Room comfort and quality' review={reviews.room}></ReviewRange>
            </div>
           </div>
        </section>
      </main>
    </div>
  )
}

export default TourDetailsPage